import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";

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
    return (
        <Box backgroundColor="blue.200" borderRadius={10} mb={10}>
            <ReviewForm />
        
            <ReviewList {...reviewMockList}/>
        </Box>
    );
}