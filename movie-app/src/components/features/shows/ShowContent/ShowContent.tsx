import { useEffect, useMemo, useState } from 'react';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { ShowReviewSection } from '../ShowReviewSection/ShowReviewSection';
import { IReview } from '@/typings/review.type';
import useSWR from 'swr';
import { getShow } from '@/fetchers/shows';
import { EmptyState } from '@chakra-ui/react';
import { TbMoodConfuzed } from 'react-icons/tb';
import { useRouter } from 'next/router';

export const ShowContent = () => {
	const router = useRouter();

	const { data, error, isLoading } = useSWR(
		`api/shows/${router.query.id}`,
		() => getShow(router.query.id as string)
	);

	const [reviewList, setReviewList] = useState<Array<IReview>>();

	useEffect(() => {
		const reviewsString = localStorage.getItem('reviews');
		if (reviewsString) {
			const savedReviews = JSON.parse(reviewsString);

			if (!savedReviews) {
				return;
			}

			// eslint-disable-next-line react-hooks/set-state-in-effect
			setReviewList(savedReviews);
		}
	}, []);

	useEffect(() => {
		if (reviewList) {
			localStorage.setItem('reviews', JSON.stringify(reviewList));
		} else localStorage.removeItem('reviews');
	}, [reviewList]);

	const averageRating = useMemo(() => {
		if (!reviewList || !reviewList.length) {
			return null;
		}

		const reviewRatingSum = reviewList
			.flatMap((review) => review.rating)
			.reduce((accumulator, reviewRating) => accumulator + reviewRating, 0);

		const rating = (reviewRatingSum / reviewList.length).toFixed(2);

		return rating;
	}, [reviewList]);

	if (isLoading) {
		return (
			<EmptyState.Root minH="100vh" backgroundColor="blue.800">
				<EmptyState.Content backgroundColor="whiteAlpha.900" p={8} rounded={10}>
					<EmptyState.Description>Loading...</EmptyState.Description>
				</EmptyState.Content>
			</EmptyState.Root>
		);
	}

	if (error) {
		return (
			<EmptyState.Root minH="100vh" backgroundColor="blue.800">
				<EmptyState.Content backgroundColor="whiteAlpha.900" p={8} rounded={10}>
					<EmptyState.Indicator>
						<TbMoodConfuzed />
					</EmptyState.Indicator>
					<EmptyState.Description>An error occured while fetching the data!</EmptyState.Description>
				</EmptyState.Content>
			</EmptyState.Root>
		);
	}

	if (!data) {
		return (
			<EmptyState.Root minH="100vh" backgroundColor="blue.800">
				<EmptyState.Content backgroundColor="whiteAlpha.900" p={8} rounded={10}>
					<EmptyState.Description>There is no information available for this show yet!</EmptyState.Description>
				</EmptyState.Content>
			</EmptyState.Root>
		);
	}

	const showDetails = data;

	const addShowReview = (review: IReview) => {
		setReviewList((oldReviewList) => {
			if (oldReviewList) {
				return [review, ...oldReviewList];
			} else {
				return [review];
			}
		});
	};

	const deleteReview = (targetUUID: string) => {
		setReviewList((oldReviewList) => {
			if (oldReviewList) {
				const newReviewList = oldReviewList.filter((review) => review.UUID !== targetUUID);
				return newReviewList;
			}
		});
	};

	return (
		<>
			<ShowDetails {...showDetails} averageRating={averageRating} />
			<ShowReviewSection reviewList={reviewList} addShowReview={addShowReview} deleteReview={deleteReview} />
		</>
	);
};
