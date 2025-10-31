import { Flex, Text } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReview } from "@/typings/review.type";



export interface IReviewList {
    reviewList?: Array<IReview>
    deleteReview: (targetIndex: number) => void
}

export const ReviewList = ({ reviewList, deleteReview } : IReviewList) => { 
    return (
        <Flex direction="column" gap={4}>
            {reviewList?.length 
            ? 
            reviewList.map((review, index) => <ReviewItem key={crypto.randomUUID()} {...review} onDelete={() => deleteReview(index)}/>) 
            :
            <Text>Be the first to review this movie!</Text>
            }
        </Flex>
    );
}