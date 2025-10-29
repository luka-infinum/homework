import { Flex } from "@chakra-ui/react";
import { IReviewItem, ReviewItem } from "../ReviewItem/ReviewItem";



interface IReviewList {
    reviewList: Array<IReviewItem>
}

export const ReviewList = ({ reviewList } : IReviewList) => { 
    return (
        <Flex direction="column" gap={4} p={6} background="blue.100" borderBottomRadius={10}>
            {reviewList.map((review, index) => <ReviewItem key={index} {...review}/>)}
        </Flex>
    );
}