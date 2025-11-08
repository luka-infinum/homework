import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { ShowCard } from './ShowCard'
import { renderWithProviders } from '@/test/test-utils'



describe('ShowCard', () => {
    const mockShow = {
        UUID: "string",
        imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg",
        title: "Matrix",
        rating: "5",
    }


    it('should render an image', () => {
        renderWithProviders(<ShowCard {...mockShow}/>)

        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })
    

    it('should render a title', () => {
        renderWithProviders(<ShowCard {...mockShow}/>)

        const title = screen.getByText(mockShow.title)
        expect(title).toBeInTheDocument()
    })


    // it('should render correct average rating', async () => {
    //     renderWithProviders(<ShowCard {...mockShow}/>)

    //     const avgRating = await screen.findByText(mockShow.rating)

    //     expect(avgRating).toBeInTheDocument()
    // })
})