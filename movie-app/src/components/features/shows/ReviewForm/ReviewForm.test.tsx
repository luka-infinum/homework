import { renderWithProviders } from "@/test/test-utils"
import { ReviewForm } from "./ReviewForm"
import { screen } from "@testing-library/dom"
// import { act } from "@testing-library/react"


describe('ReviewForm', () => {

    it('should render comment input', () => {
        
        // act(() => {
            renderWithProviders(<ReviewForm addShowReview={() => {}}/>)
            
            const commentInput = screen.getByPlaceholderText('Your review')
            expect(commentInput).toBeInTheDocument()
            
        // })
    })
    
    it('should render rating input', () => {
        
        // act(() => {
            renderWithProviders(<ReviewForm addShowReview={() => {}}/>)
            
            const ratingInput = screen.getByText('Rating')
            expect(ratingInput).toBeInTheDocument()
            
        // })
    })
    
    it('should render button', () => {

        // act(() => {
            renderWithProviders(<ReviewForm addShowReview={() => {}}/>)
            
            const button = screen.getByText('Post')
            expect(button).toBeInTheDocument()

        // })
    })
})
