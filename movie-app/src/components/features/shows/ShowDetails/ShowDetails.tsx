import { Alert, Box, Heading, Image, Stat, Text } from "@chakra-ui/react"

interface IShowDetailsProps {
    title: string
    description: string
    imageUrl?: string
    averageRating: string | null
}

export const ShowDetails = ({ title, description, imageUrl, averageRating } : IShowDetailsProps) => {

    return (
        <Box pb={4} mb={6} borderBottomRadius={10} background="gray.100">
            {imageUrl ? <Image src={imageUrl} alt="Image of a star in a galaxy"/> : <Image src="https://placehold.net/600x400.png" alt="Movie hero image unavailable"/>}
            <Box p={6}>
                <Heading size="3xl" mb={5}>{title}</Heading>
                <Text mb={5}>{description}</Text>

                {averageRating ? 
                    <Stat.Root>
                        <Stat.Label>Rating</Stat.Label>
                        <Stat.ValueText>{averageRating} / 5</Stat.ValueText>
                        <Stat.HelpText>Rating is updated live</Stat.HelpText>
                    </Stat.Root> 
                    : 
                    <Alert.Root status="info">
                        <Alert.Indicator />
                        <Alert.Title>No ratings for now</Alert.Title>
                    </Alert.Root>}
            </Box>
        </Box>
    );
}