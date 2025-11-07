import { useEffect, useMemo, useState } from "react";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";
import { IReview } from "@/typings/review.type";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getShow } from "@/fetchers/shows";
import { Text } from "@chakra-ui/react";



export const ShowContent = () => {
    const params = useParams();
    const { data, error, isLoading } = useSWR(`api/shows/${params.id}`, () => getShow(params.id as string))


    const [reviewList, setReviewList] = useState<Array<IReview>>();
    
    useEffect(() => {
        const reviewsString = localStorage.getItem("reviews");
        if (reviewsString){
            const savedReviews = JSON.parse(reviewsString);

            if (!savedReviews) {
                return
            }

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setReviewList(savedReviews);
        }
    }, []);

    useEffect(() => {
        if (reviewList) 
            localStorage.setItem("reviews", JSON.stringify(reviewList));
        else 
            localStorage.removeItem("reviews");
    }, [reviewList]);


    const averageRating = useMemo(() => {
        if (!reviewList || !reviewList.length) 
            return null


        const reviewRatingSum = reviewList
            .flatMap((review) => review.rating)
            .reduce((accumulator, reviewRating) => accumulator + reviewRating, 0);

        const rating = (reviewRatingSum / reviewList.length).toFixed(2);

        return rating;
    }, [reviewList]);


    if (isLoading){
        return (
            <Text>Loading...</Text>
        )
    }

    if (error || !data){
        return (
            <Text>ERROR</Text>
        )
    }
     const showDetails = data


    const addShowReview = (review: IReview) => {
        setReviewList(oldReviewList => {
            if (oldReviewList) 
                return [review, ...oldReviewList]
            else 
                return [review]
        });
    }

    const deleteReview = (targetUUID: string) => {
        setReviewList(oldReviewList => {
            if (oldReviewList) {
                const newReviewList = oldReviewList.filter(review => review.UUID !== targetUUID)
                return newReviewList;
            }
        })
    }



   

    return (
        <>
            <ShowDetails {...showDetails} averageRating={averageRating} />
            <ShowReviewSection reviewList={reviewList} addShowReview={addShowReview} deleteReview={deleteReview} />
        </>
    );
}