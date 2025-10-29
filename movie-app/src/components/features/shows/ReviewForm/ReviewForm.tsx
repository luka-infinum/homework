import { IReview } from "@/typings/review.type";
import { Badge, Box, Button, Field, Heading, Input, NumberInput, Stack, Textarea } from "@chakra-ui/react";


interface IReviewForm {
    addShowReview: (review: IReview) => void
}


export const ReviewForm = ({ addShowReview: addReview } : IReviewForm) => {
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
        
        addReview(newReview);
        emailEl.value = '';
        commentEl.value = '';
        ratingEl.value = '5';
    }

    return(
        <Box background="gray.100" p={6} borderRadius={10}>
            <Heading mb={7}>Write a review</Heading>

            <Stack gap={4} mb={6}>
                <Field.Root>
                    <Field.Label>
                        Email
                        <Field.RequiredIndicator
                        fallback={
                            <Badge size="xs" variant="surface">
                            Optional
                            </Badge>
                        }
                        />
                    </Field.Label>
                    <Input placeholder="me@example.com" id="review-email"/>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Comment</Field.Label>
                    <Textarea id="review-comment" size="md" placeholder="Your review"/>
                </Field.Root>

                <Field.Root id="review-rating">
                    <Field.Label>Rating</Field.Label>
                    <NumberInput.Root width="200px" defaultValue="5" min={1} max={5}>
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