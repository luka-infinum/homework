import { renderWithProviders } from "@/test/test-utils"
import { screen } from '@testing-library/react'
import { ReviewItem } from "./ReviewItem"


describe('ReviewItem', () => {
    const mockReview = {
        email: 'user@mail.com',
        avatarUrl: 'avatarUrl',
        comment : 'comment',
        rating: 4,
    }


    it('should render user email', () => {
        renderWithProviders(<ReviewItem {...mockReview} onDelete={() => {}}/>)
        
        const email = screen.getByText(mockReview.email)
        expect(email).toBeInTheDocument()
    })
    
    
    it('should render correct rating', () => {
        renderWithProviders(<ReviewItem {...mockReview} onDelete={() => {}}/>)
        
        const avgRating = screen.getByText(mockReview.rating)
        expect(avgRating).toBeInTheDocument()
    })
    
    
    it('should render review comment', () => {
        renderWithProviders(<ReviewItem {...mockReview} onDelete={() => {}}/>)
        
        const comment = screen.getByText(mockReview.comment)
        expect(comment).toBeInTheDocument()
    })
    
    
    it('should render delete button', () => {
        renderWithProviders(<ReviewItem {...mockReview} onDelete={() => {}}/>)

        const deleteButton = screen.getByText('Delete')
        expect(deleteButton).toBeInTheDocument()
    })
    

    it('should call onDelete only once when delete button is clicked', () => {
        const mockOnDelete = jest.fn()

        renderWithProviders(<ReviewItem onDelete={mockOnDelete} {...mockReview}/>)
    
        const deleteButton = screen.getByText('Delete')
        deleteButton.click()

        expect(mockOnDelete).toHaveBeenCalledTimes(1)
    })
})