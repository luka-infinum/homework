import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { useEffect, useState } from "react";
import { IReview } from "@/typings/review.type";


export const ShowReviewSection = () => {

    const [reviewList, setReviewList] = useState<Array<IReview>>();
    
    useEffect(() => {
        const reviewsString = localStorage.getItem("reviews");
        if (reviewsString){
            const savedReviews = JSON.parse(reviewsString);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setReviewList(savedReviews);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviewList))
    }, [reviewList])

    const addShowReview = (review: IReview) => {
        if (!review.comment)
            return

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
                const newReviewList = oldReviewList.filter((review, index) => index != targetIndex)
                return newReviewList;
            }
        })
        console.log("Deleted review number", targetIndex);
    }

    return (
        <Box backgroundColor="blue.200" borderRadius={10} mb={10}>
            <ReviewForm addShowReview={addShowReview} />
            <Box p={6}>
                <ReviewList reviewList={reviewList} deleteReview={deleteReview}/>
            </Box>
        </Box>
    );
}