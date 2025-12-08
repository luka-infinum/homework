import { Heading, Link, Stack } from '@chakra-ui/react';
import { SidebarLink } from './components/SidebarLink';
import { useRouter } from 'next/router';



export const SidebarNavigation = () => {
	const { pathname } = useRouter();

	return (
		<Stack direction="column" height="100vh" p={8}>
			<Heading color="white" size="2xl" mb={10}>
				My movie app
			</Heading>
			<Stack gap={4} width={48}>
				<SidebarLink url="/shows" linkText="All shows" path={pathname} />
				<SidebarLink url="/top-rated" linkText="Top rated" path={pathname} />
				<SidebarLink url="/" linkText="My profile" />
			</Stack>
			<Link href="#" color="white" fontSize="lg" variant="underline" mt="auto">
				Log out
			</Link>
		</Stack>
	);
};
