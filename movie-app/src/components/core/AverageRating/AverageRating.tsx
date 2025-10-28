import { Text } from "@chakra-ui/react";


interface IAverageRating {
    averageRating: number
}

export const AverageRating = ({ averageRating } : IAverageRating) => {
    return (
        <Text fontSize="2xl"> 
            {averageRating} / 5
        </Text>
    );
}