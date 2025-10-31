import { IReview } from "@/typings/review.type";
import { Badge, Box, Button, Field, Heading, Input, NumberInput, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";


interface IReviewForm {
    addShowReview: (review: IReview) => void
}


export const ReviewForm = ({ addShowReview: addReview } : IReviewForm) => {
    const [commentError, setCommentError] = useState(false);

    const submitForm = () => {
        const emailEl = document.getElementById("review-email") as HTMLInputElement;
        const email = emailEl.value ? emailEl.value : 'anonymous';
        const commentEl = document.getElementById("review-comment") as HTMLInputElement;
        const comment = commentEl.value;
        const ratingEl = document.getElementById("review-rating") as HTMLInputElement;
        const rating = parseInt(ratingEl.value);

        const newReview: IReview = {
            email,
            comment,
            rating,
        }

        if (!comment) {
            setCommentError(true);
            return
        }
        
        addReview(newReview);
        emailEl.value = '';
        commentEl.value = '';
        ratingEl.value = '5';
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

                <Field.Root id="review-rating">
                    <Field.Label>Rating</Field.Label>
                    <NumberInput.Root defaultValue="5" min={1} max={5}>
                        <NumberInput.Control />
                        <NumberInput.Input />
                    </NumberInput.Root>
                    <Field.HelperText>Enter a number between 1 and 5</Field.HelperText>
                </Field.Root>
            </Stack>

            <Button colorPalette="blue" width="full" onClick={submitForm}>Post</Button>
        </Box>
    );
}