import { Flex, Text } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReview } from "@/typings/review.type";



export interface IReviewListProps {
    reviewList?: Array<IReview>
    deleteReview: (targetUUID: string) => void
}

export const ReviewList = ({ reviewList, deleteReview } : IReviewListProps) => { 
    return (
        <Flex direction="column" gap={4}>
            {reviewList?.length 
            ? 
            reviewList.map(review => <ReviewItem key={review.UUID} {...review} onDelete={() => deleteReview(review.UUID)}/>) 
            :
            <Text>Be the first to review this movie!</Text>
            }
        </Flex>
    );
}