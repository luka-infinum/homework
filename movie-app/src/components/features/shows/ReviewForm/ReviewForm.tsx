import { IReview } from "@/typings/review.type";
import { Badge, Box, Button, Field, Heading, Input, RatingGroup, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";


interface IReviewForm {
    addShowReview: (review: IReview) => void
}


export const ReviewForm = ({ addShowReview: addReview } : IReviewForm) => {
    const DEFAULT_RATING = 0;
    const [commentError, setCommentError] = useState(false);
    const [ratingError, setRatingError] = useState(false);

    const [starRating, setStarRating] = useState(DEFAULT_RATING);

    const submitForm = () => {
        let inputError = false;

        const emailEl = document.getElementById("review-email") as HTMLInputElement;
        const email = emailEl.value ? emailEl.value : 'anonymous';
        const commentEl = document.getElementById("review-comment") as HTMLInputElement;
        const comment = commentEl.value;
        // const ratingEl = document.getElementById("review-rating") as HTMLInputElement;
        // const rating = parseInt(ratingEl.value);

        if (!comment) {
            setCommentError(true);
            inputError = true;
        }
        
        if (!starRating) {
            setRatingError(true);
            inputError = true;
        }

        if (inputError)
            return

        const newReview: IReview = {
            email,
            comment,
            rating: starRating,
        }

        
        addReview(newReview);
        
        emailEl.value = '';
        commentEl.value = '';
        setStarRating(DEFAULT_RATING)
    }

    return(
        <Box background="gray.100" p={6} borderRadius={10}>
            <Heading mb={7}>Write a review</Heading>

            <Stack gap={4} mb={6}>
                <Field.Root id="review-email">
                    <Field.Label>
                        Email
                        <Field.RequiredIndicator
                        fallback={
                            <Badge size="xs" variant="surface" colorPalette="blue">
                            Optional
                            </Badge>
                        }
                        />
                    </Field.Label>
                    <Input placeholder="me@example.com"/>
                </Field.Root>

                <Field.Root id="review-comment" invalid={commentError} onChange={() => setCommentError(false)}>
                    <Field.Label>Comment</Field.Label>
                    <Textarea size="md" placeholder="Your review"/>
                    <Field.ErrorText>You must enter a comment!</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={ratingError}>
                    <Field.Label>Rating</Field.Label>
                    <RatingGroup.Root count={5} value={starRating} onValueChange={(el) => setStarRating(el.value)} onChange={() => setRatingError(false)} size="sm" gap="3" colorPalette="orange"> 
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control cursor="pointer"/>
                    </RatingGroup.Root>
                    <Field.HelperText>Select a rating by clicking on the star</Field.HelperText>
                    <Field.ErrorText>You must select a rating!</Field.ErrorText>
                </Field.Root>
            </Stack>

            <Button colorPalette="blue" width="full" onClick={submitForm}>Post</Button>
        </Box>
    );
}