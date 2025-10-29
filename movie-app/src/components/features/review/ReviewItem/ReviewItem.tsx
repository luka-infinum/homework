import { Avatar, Button, Card, Flex, Text } from "@chakra-ui/react"


export interface IReviewItem {
    email: string
    avatarUrl: string
    comment : string
    rating: number
}


export const ReviewItem = ({ email, avatarUrl, comment, rating } : IReviewItem) => {
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
            <Card.Body>
                <Text>{comment} </Text>
                <Text>{rating} / 5</Text>
            </Card.Body>
            <Card.Footer>
                <Button colorPalette="red" variant="solid">Delete</Button>
            </Card.Footer>
        </Card.Root>
    );
}