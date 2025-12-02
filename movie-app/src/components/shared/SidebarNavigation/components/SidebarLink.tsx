import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISidebarLinkProps {
	url: string;
	linkText: string;
	path?: string;
}

export const SidebarLink = ({ url, linkText, path }: ISidebarLinkProps) => {
	return (
		<Link
			as={NextLink}
			href={url}
			color="white"
			backgroundColor={path === url ? 'blue.600' : ''}
			paddingY={2}
			paddingX={4}
			rounded="xl"
			width="full"
			aria-current={path === url ? 'page' : 'false'}
			_hover={{ bg: "blue.500"}}
			
		>
			{linkText}
		</Link>
	);
};
