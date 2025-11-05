import { Box } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReview } from "@/typings/review.type";


interface IShowReviewSectionProps {
    reviewList?: IReview[]
    addShowReview: (review: IReview) => void
    deleteReview: (targetUUID: string) => void
}

export const ShowReviewSection = ({ reviewList, addShowReview, deleteReview } : IShowReviewSectionProps) => {

    return (
        <Box backgroundColor="blue.200" borderRadius={10} mb={10}>
            <ReviewForm addShowReview={addShowReview} />
            <Box p={6}>
                <ReviewList reviewList={reviewList} deleteReview={deleteReview}/>
            </Box>
        </Box>
    );
}