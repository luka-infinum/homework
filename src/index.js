
function saveToLocalStorage(review) {
    const reviewList = loadFromLocalStorage();
    reviewList.push(review);

    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem('reviews', reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('reviews');
    const reviewList = JSON.parse(reviewListString);
    return reviewList ? reviewList : [];
}

function renderReviews() {
    const reviewContainer = document.getElementById('reviews');

    const reviews = loadFromLocalStorage();

    reviews.forEach(r => {
        const reviewElement = createReview(r);
        reviewContainer.appendChild(reviewElement);
    });
}

function renderNewReview(review) {
    

    const reviewContainer = document.getElementById('reviews');

    const reviewElement = createReview(review);
    reviewContainer.appendChild(reviewElement);
}

function createReview(review) {

    const reviewElement = document.createElement('div');
    reviewElement.classList = ['review'];

    const description = document.createElement('p');
    description.innerHTML = review.description;
    reviewElement.appendChild(description);
    
    const rating = document.createElement('p');
    rating.innerHTML = review.rating + '/5';
    reviewElement.appendChild(rating);

    return reviewElement;
}

function postReview() {

    const description = document.getElementById('review-description').value;
    const rating = document.getElementById('review-rating').value;

    if (!description || !rating) {
        return;
    }

    if (rating > 5 || rating < 1) {
        alert('Rating must be a number between 1 and 5!');
        return;
    }
    
    const newReview = {
        description: description,
        rating: rating
    }
    
    renderNewReview(newReview);
    saveToLocalStorage(newReview);
    
    document.getElementById('review-description').value = '';
    document.getElementById('review-rating').value = '';
}


renderReviews();
