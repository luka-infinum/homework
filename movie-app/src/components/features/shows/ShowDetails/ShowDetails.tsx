import { Box, Heading, Image, Stat, Text } from "@chakra-ui/react"

interface IShow {
    title: string
    description: string
    averageRating?: number
    imageUrl?: string
}

export const ShowDetails = ({ title, description, averageRating, imageUrl} : IShow) => {
    return (
        <Box pb={4} mb={6} borderBottomRadius={10} background="gray.100">
            {imageUrl ? <Image src={imageUrl} alt="Image of a star in a galaxy"/> : <Image src={"https://placehold.net/600x400.png"} alt="Movie hero image unavailable"/>}
            <Box p={6}>
                <Heading size="3xl" mb={5}>{title}</Heading>
                <Text mb={5}>{description}</Text>

                {averageRating ? 
                    <Stat.Root>
                        <Stat.Label>Rating</Stat.Label>
                        <Stat.ValueText>{averageRating} / 5</Stat.ValueText>
                    </Stat.Root> 
                    : 
                    <Text>no ratings</Text>}
            </Box>
        </Box>
    );
}