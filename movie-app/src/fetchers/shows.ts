import { IShow } from "@/typings/show.type";
import { fetcher } from "./fetcher";


interface IShowsResponse {
    shows: Array<IShow>
}

export function getShows() {
    console.log('getShows')
    return fetcher<IShowsResponse>('/api/shows');
}


export function getShow(id: string) {
    console.log('getShow')
    return fetcher<IShow>(`/api/shows/${id}`);
}

export function getShowsTopRated() {
    console.log('getShowsTopRated')
    return fetcher<IShowsResponse>('/api/shows/top-rated');
}