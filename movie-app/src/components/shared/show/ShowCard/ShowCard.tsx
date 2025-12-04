import { Card, Flex, Icon, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdStar } from "react-icons/md";

export interface IShowCardProps {
	UUID: string;
	imageUrl: string;
	title: string;
	rating: string;
}

export const ShowCard = ({ UUID, imageUrl, title, rating }: IShowCardProps) => {
	return (
		<Card.Root as={LinkBox} width={52} size="sm" overflow="hidden" rounded={10} borderColor="blue.800">
			<Image
				aspectRatio={3 / 4}
				src={imageUrl}
				alt={`${title} cover image`}
			/>
			<Card.Body>
				<Card.Title>
					<LinkOverlay asChild>
						<NextLink href={`shows/${UUID}`}>
							{title}
						</NextLink>
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
