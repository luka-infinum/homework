import { Link, Span } from '@chakra-ui/react';

interface ISidebarLink {
	url: string;
	linkText: string;
	active?: boolean;
}

export const SidebarLink = ({ url, linkText, active }: ISidebarLink) => {
	return (
		<Link href={url} color="white">
			<Span
				backgroundColor={active ? 'blue.600' : ''}
				paddingY={2}
				paddingX={4}
				rounded="xl"
				width="full"
			>
				{linkText}
			</Span>
		</Link>
	);
};
