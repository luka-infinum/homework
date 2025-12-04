import { renderWithProviders } from "@/test/test-utils"
import { ReviewForm } from "./ReviewForm"
import { screen } from "@testing-library/dom"


describe('ReviewForm', () => {

    it('should render comment input', async () => {
        
            renderWithProviders(<ReviewForm addShowReview={() => {}}/>)
            
            const commentInput = await screen.findByPlaceholderText('Your review')
            expect(commentInput).toBeInTheDocument()
            
    })
    
    it('should render rating input', async () => {
        
            renderWithProviders(<ReviewForm addShowReview={() => {}}/>)
            
            const ratingInput = await screen.findByText('Rating')
            expect(ratingInput).toBeInTheDocument()
            
    })
    
    it('should render button', async () => {

            renderWithProviders(<ReviewForm addShowReview={() => {}}/>)
            
            const button = await screen.findByText('Post')
            expect(button).toBeInTheDocument()

    })
})
