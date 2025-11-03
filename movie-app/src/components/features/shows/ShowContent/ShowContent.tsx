import { useEffect, useState } from "react";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";
import { IReview } from "@/typings/review.type";


const movieMock = {
  title: "Interstellar",
  description: "In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth's crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base 6 hours from Cooper's home, he is asked to go on a daring mission with a few other scientists into a wormhole because of Cooper's scientific intellect and ability to pilot aircraft unlike the other crew members. In order to find a new home while Earth decays, Cooper must decide to either stay, or risk never seeing his children again in order to save the human race by finding another habitable planet.",
  imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
}


export const ShowContent = () => {
    
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
            localStorage.setItem("reviews", JSON.stringify(reviewList))
        else 
            localStorage.setItem("reviews", JSON.stringify(null))
    }, [reviewList]);


    const addShowReview = (review: IReview) => {
        setReviewList(oldReviewList => {
            if (oldReviewList) 
                return [review, ...oldReviewList]
            else 
                return [review]
        });
    }

    const deleteReview = (targetIndex: number) => {
        setReviewList(oldReviewList => {
            if (oldReviewList) {
                const newReviewList = oldReviewList.filter((review, index) => index !== targetIndex)
                return newReviewList;
            }
        })
    }


    const calculateAverageRating = () => {
        if (!reviewList || !reviewList.length) 
            return null


        const reviewRatingSum = reviewList
            .flatMap((review) => review.rating)
            .reduce((accumulator, reviewRating) => accumulator + reviewRating, 0);

        const rating = (reviewRatingSum / reviewList.length).toFixed(2);

        return rating;
    }


    return (
        <>
            <ShowDetails {...movieMock} averageRating={calculateAverageRating()} />
            <ShowReviewSection reviewList={reviewList} addShowReview={addShowReview} deleteReview={deleteReview} />
        </>
    );
}