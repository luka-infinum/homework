import { renderWithProviders } from '@/test/test-utils';
import { ShowList } from './ShowList';
import { screen } from '@testing-library/dom';

describe('ShowList', () => {
	const mockShowList = [
		{
			UUID: '1',
			imageUrl:
				'https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg',
			title: 'Interstellar',
			rating: '5',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			UUID: '2',
			imageUrl:
				'https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg',
			title: 'The Shawshank Redemption',
			rating: '1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			UUID: '3',
			imageUrl:
				'https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg',
			title: 'The Dark Knight',
			rating: '3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			UUID: '4',
			imageUrl:
				'https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg',
			title: 'Inception',
			rating: '5',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	];

	it('should render all shows', () => {
		renderWithProviders(<ShowList showList={mockShowList} />);

        mockShowList.forEach(show => {
            const showTitle = screen.getByText(show.title)
            expect(showTitle).toBeInTheDocument()
        })
	});
});
