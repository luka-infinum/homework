import { Box, Heading, Image, Stat, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IReviewItem } from "../../review/ReviewItem/ReviewItem"

interface IShow {
    title: string
    description: string
    imageUrl?: string
}

export const ShowDetails = ({ title, description, imageUrl} : IShow) => {

    const [rating, setRating] = useState<string>();

    useEffect(() => {
        const reviewsString = localStorage.getItem("reviews");
        if (reviewsString){
            const savedReviews = JSON.parse(reviewsString) as Array<IReviewItem>;

            if (savedReviews.length) {
                const reviewRatingSum = savedReviews
                                            .flatMap((review) => review.rating)
                                            .reduce((accumulator, reviewRating) => accumulator + reviewRating);
                const rating = (reviewRatingSum / savedReviews.length).toFixed(2);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setRating(rating);
            }
        }
    }, []);

    return (
        <Box pb={4} mb={6} borderBottomRadius={10} background="gray.100">
            {imageUrl ? <Image src={imageUrl} alt="Image of a star in a galaxy"/> : <Image src={"https://placehold.net/600x400.png"} alt="Movie hero image unavailable"/>}
            <Box p={6}>
                <Heading size="3xl" mb={5}>{title}</Heading>
                <Text mb={5}>{description}</Text>

                {rating ? 
                    <Stat.Root>
                        <Stat.Label>Rating</Stat.Label>
                        <Stat.ValueText>{rating} / 5</Stat.ValueText>
                    </Stat.Root> 
                    : 
                    <Text>no ratings</Text>}
            </Box>
        </Box>
    );
}