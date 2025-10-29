import { Flex, Text } from "@chakra-ui/react";
import { IReviewItem, ReviewItem } from "../ReviewItem/ReviewItem";



export interface IReviewList {
    reviewList?: Array<IReviewItem>
}

export const ReviewList = ({ reviewList } : IReviewList) => { 
    return (
        <Flex direction="column" gap={4}>
            {reviewList?.length 
            ? 
            reviewList.map((review, index) => <ReviewItem key={index} {...review}/>) 
            :
            <Text>Be the first to review this movie!</Text>
            }
        </Flex>
    );
}