import { AverageRating } from "@/components/core/AverageRating/AverageRating"
import { Box, Heading, Image, Text } from "@chakra-ui/react"

interface IShow {
    title: string
    description: string
    averageRating?: number
    imageUrl?: string
}

export const ShowDetails = ({ title, description, averageRating, imageUrl} : IShow) => {
    return (
        <Box pb={4} mb={6} borderBottomRadius={10} background={"#eeeeee"}>
            {imageUrl ? <Image src={imageUrl} alt="movie-hero-image"/> : <Image src={"https://placehold.net/600x400.png"} alt="movie-hero-image-unavailable"/>}
            <Box p={6}>
                <Heading size={"3xl"} mb={5}>{title}</Heading>
                <Text mb={3}>{description}</Text>
                {averageRating ? <AverageRating averageRating={averageRating} /> : <Text>no ratings</Text>}
            </Box>
        </Box>
    );
}