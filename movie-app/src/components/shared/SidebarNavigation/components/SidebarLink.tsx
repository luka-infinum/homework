import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISidebarLinkProps {
	url: string;
	linkText: string;
	active?: boolean;
}

export const SidebarLink = ({ url, linkText, active }: ISidebarLinkProps) => {
	return (
		<Link
			as={NextLink}
			href={url}
			color="white"
			backgroundColor={active ? 'blue.600' : ''}
			paddingY={2}
			paddingX={4}
			rounded="xl"
			width="full"
			aria-current={active ? 'page' : 'false'}
		>
			{linkText}
		</Link>
	);
};
