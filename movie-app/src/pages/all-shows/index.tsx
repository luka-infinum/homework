import MovieAppLayout from "@/components/shared/layouts/MovieAppLayout/MovieAppLayout";
import { ShowList } from "@/components/shared/show/ShowList/ShowList";


const mockList = [
    {
        UUID: '1',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '2',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '3',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '4',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '5',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '6',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '7',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '8',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
    {
        UUID: '9',
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Interstellar",
        rating: "5"
    },
]


export default function AllShowsPage() {
    return (
        <MovieAppLayout>
            <ShowList showList={mockList}/>
        </MovieAppLayout>
    );
}