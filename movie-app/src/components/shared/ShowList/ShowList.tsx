import { Wrap } from "@chakra-ui/react";
import { IShowCard, ShowCard } from "../ShowCard/ShowCard"


interface IShowList {
    showList: Array<IShowCard>
}

export const ShowList = ({ showList } : IShowList) => {
    return(
        <Wrap columns={3} gap={8} p={4} backgroundColor="blue.800">
            {showList.map(show => <ShowCard key={show.UUID} {...show}/>)}
        </Wrap>
    );
}