import { Wrap } from "@chakra-ui/react";
import { IShowCardProps, ShowCard } from "../ShowCard/ShowCard";


interface IShowListProps {
    showList: Array<IShowCardProps>
}

export const ShowList = ({ showList } : IShowListProps) => {
    return(
        <Wrap columns={3} gap={8} p={4} backgroundColor="blue.800">
            {showList.map(show => <ShowCard key={show.UUID} {...show}/>)}
        </Wrap>
    );
}