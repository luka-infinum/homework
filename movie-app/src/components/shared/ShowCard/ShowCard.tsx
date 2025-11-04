import { Card, Flex, Icon, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { MdStar } from "react-icons/md";

export interface IShowCard {
	UUID: string;
	imageUrl: string;
	title: string;
	rating: string;
}

export const ShowCard = ({ UUID, imageUrl, title, rating }: IShowCard) => {
	return (
		<Card.Root as={LinkBox} width={52} size="sm" overflow="hidden" rounded={10} borderColor="blue.800">
			<Image
				aspectRatio={3 / 4}
				src={imageUrl}
				alt={`${title} cover image`}
			/>
			<Card.Body>
				<Card.Title>
					<LinkOverlay href={`all-shows/${UUID}`}>
						{title}
					</LinkOverlay>
				</Card.Title>
				<Card.Description as={Flex} color="blue.700" direction="row" alignItems="center" gap={1}>
					<Icon size="sm">
						<MdStar/>
					</Icon>
					{rating}/5
				</Card.Description>
			</Card.Body>
		</Card.Root>
	);
};
