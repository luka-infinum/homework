import MovieAppLayout from "@/components/shared/layouts/MovieAppLayout/MovieAppLayout";
import { ShowList } from "@/components/shared/show/ShowList/ShowList";
import { getShows } from "@/fetchers/shows";
import { Text } from "@chakra-ui/react";
import useSWR from "swr";



export default function AllShowsPage() {
    
    const { data, error, isLoading } = useSWR('api/shows', getShows)
    const showsList = data?.shows || [];

    if (isLoading){
        return (
            <Text>Loading...</Text>
        )
    }

    if (error){
        return (
            <Text>ERROR</Text>
        )
    }

    return (
        <MovieAppLayout>
            <ShowList showList={showsList}/>
        </MovieAppLayout>
    );
}