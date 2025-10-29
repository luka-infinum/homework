import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewItem } from "../../review/ReviewItem/ReviewItem";
import { useEffect, useState } from "react";

const reviewMockList = {
  reviewList: [
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",
      rating: 5
    },
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",// This is the card body. Lorem ipsum dolor sit amet, consectetuadipiscing elit.",
      rating: 5
    },
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",
      rating: 5
    },
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",
      rating: 5
    },
  ]
}

export const ShowReviewSection = () => {

    const [reviewList, setReviewList] = useState<Array<IReviewItem>>();
    
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

    const addReview = (review: IReviewItem) => {
        setReviewList(oldReviewList => {
            if (oldReviewList) 
                return [review, ...oldReviewList]
            else 
                return [review]
        });
    }

    return (
        <Box backgroundColor="blue.200" borderRadius={10} mb={10}>
            <ReviewForm addReview={addReview} />
            <Box p={6}>
                <ReviewList reviewList={reviewList}/>
            </Box>
        </Box>
    );
}