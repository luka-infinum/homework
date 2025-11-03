import { ShowContent } from "@/components/features/shows/ShowContent/ShowContent";
import { Flex } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex minHeight="100vh" direction="column" alignItems="center" background="blue.800">
      <Flex direction="column" width="90%" maxWidth={600}>
        
        <ShowContent />
        
      </Flex>
    </Flex>
  );
}
