import MovieAppLayout from "@/components/shared/layouts/MovieAppLayout/MovieAppLayout";
import useSWR from "swr";
import { Text } from "@chakra-ui/react";
import { getShowsTopRated } from "@/fetchers/shows";
import { ShowList } from "@/components/shared/show/ShowList/ShowList";


export default function TopRatedShowsPage() {
    const { data, error, isLoading } = useSWR('api/shows/top-rated', getShowsTopRated)
    const topRatedShowsList = data?.shows || [];
    
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
            <ShowList showList={topRatedShowsList} />
        </MovieAppLayout>
    );
}