import { Avatar, Button, Card, Flex, RatingGroup, Text } from "@chakra-ui/react"


export interface IReviewItem {
    email: string
    avatarUrl?: string
    comment : string
    rating: number
    onDelete: () => void
}


export const ReviewItem = ({ email, avatarUrl, comment, rating, onDelete } : IReviewItem) => {
    return (
        <Card.Root size="sm">
            <Card.Header>
                <Flex direction="row" alignItems="center" gap={4}>
                    <Avatar.Root>
                        <Avatar.Fallback />
                        <Avatar.Image src={avatarUrl} />
                    </Avatar.Root>
                    <Text>{email}</Text>
                </Flex>
            </Card.Header>
            <Card.Body mb={3}>
                <Text mb={2}>{comment}</Text>
                <RatingGroup.Root readOnly count={5} value={rating} size="sm" gap="3" colorPalette="orange"> 
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                </RatingGroup.Root>
            </Card.Body>
            <Card.Footer>
                <Button colorPalette="red" variant="solid" onClick={onDelete}>Delete</Button>
            </Card.Footer>
        </Card.Root>
    );
}