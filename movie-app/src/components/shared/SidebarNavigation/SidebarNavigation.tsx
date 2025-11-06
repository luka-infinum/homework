import { Heading, Link, Stack } from '@chakra-ui/react';
import { SidebarLink } from './components/SidebarLink';



export const SidebarNavigation = () => {
	return (
		<Stack direction="column" height="100vh" p={8}>
			<Heading color="white" size="2xl" mb={10}>
				My movie app
			</Heading>
			<Stack gap={4} width={48}>
				<SidebarLink url="/all-shows" linkText="All shows" active />
				<SidebarLink url="/top-rated" linkText="Top rated" />
				<SidebarLink url="/" linkText="My profile" />
			</Stack>
			<Link href="#" color="white" fontSize="lg" variant="underline" mt="auto">
				Log out
			</Link>
		</Stack>
	);
};
