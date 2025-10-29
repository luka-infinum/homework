import { ReviewList } from "@/components/features/review/ReviewList/ReviewList";
import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { Flex } from "@chakra-ui/react";


const movieMock = {
  title: "Interstellar",
  description: "In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth's crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base 6 hours from Cooper's home, he is asked to go on a daring mission with a few other scientists into a wormhole because of Cooper's scientific intellect and ability to pilot aircraft unlike the other crew members. In order to find a new home while Earth decays, Cooper must decide to either stay, or risk never seeing his children again in order to save the human race by finding another habitable planet.",
  imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
  // averageRating: 9
}


const reviewMockList = {
  reviewList: [
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",
      rating: 5
    },
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",// This is the card body. Lorem ipsum dolor sit amet, consectetuadipiscing elit.",
      rating: 5
    },
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",
      rating: 5
    },
    {
      email: "ana.babic@yahoo.com",
      avatarUrl: "https://bit.ly/sage-adebayo",
      comment: "Odličan film!",
      rating: 5
    },
  ]
}

export default function Home() {
  return (
    <Flex minHeight="100vh" direction="column" alignItems="center" background="#7ca6b3">
      <Flex direction="column" width="90%" maxWidth={600}>
        <ShowDetails {...movieMock} />
        
        <ReviewForm />

        <ReviewList {...reviewMockList}/>

      </Flex>
    </Flex>
  );
}
