import { Box, Button, Field, Heading, NumberInput, Textarea } from "@chakra-ui/react";


export const ReviewForm = () => {
    return(
        <Box background="gray.100" p={6} borderRadius={10}>
            <Heading mb={6}>Write a review</Heading>

            <Textarea size="md" placeholder="Your review" mb={4}/>

            <Field.Root mb={6}>
                <NumberInput.Root width="200px" defaultValue="5" min={1} max={5}>
                    <NumberInput.Control />
                    <NumberInput.Input />
                </NumberInput.Root>
                <Field.HelperText>Enter a number between 1 and 5</Field.HelperText>
            </Field.Root>

            <Button colorPalette="blue" width="full">Post</Button>
        </Box>
    );
}