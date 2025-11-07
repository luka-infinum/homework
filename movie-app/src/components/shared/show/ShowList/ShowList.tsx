import { Box, EmptyState, Wrap } from "@chakra-ui/react";
import { IShowCardProps, ShowCard } from "../ShowCard/ShowCard";
import { PiSmileySad } from "react-icons/pi";



interface IShowListProps {
    showList: Array<IShowCardProps>
}

export const ShowList = ({ showList } : IShowListProps) => {

    if (!showList.length) {
        return (
            <EmptyState.Root minH="100vh" backgroundColor="blue.800">
            <EmptyState.Content backgroundColor="whiteAlpha.900" p={8} rounded={10}>
                <EmptyState.Indicator>
                    <PiSmileySad />
                </EmptyState.Indicator>
                <EmptyState.Description>
                    There are no shows to display here!
                </EmptyState.Description>
            </EmptyState.Content>
            </EmptyState.Root>
        )
    }

    return(
        <Box minH="100vh" backgroundColor="blue.800">
            <Wrap columns={3} gap={8} p={4}>
                {showList.map(show => <ShowCard key={show.UUID} {...show}/>)}
            </Wrap>
        </Box>
    );
}