
function saveToLocalStorage(review) {
    const reviewList = loadFromLocalStorage();
    reviewList.push(review);

    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem('reviews', reviewListString);
}

function updateLocalStorage(reviewList) {
    const reviewListString = JSON.stringify(reviewList)
    localStorage.setItem('reviews', reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('reviews');
    const reviewList = JSON.parse(reviewListString);
    return reviewList ? reviewList : [];
}


function renderReviews() {
    const reviewContainer = document.getElementById('reviews');
    reviewContainer.innerHTML = '';

    const reviews = loadFromLocalStorage();

    const avgRating = calculateAvgRating(reviews);
    const avgRatingPlaceholder = document.getElementById('avg-rating');
    avgRatingPlaceholder.innerHTML = avgRating;

    reviews.forEach((r, idx) => {
        const reviewElement = createReview(r);
        reviewElement.id =idx;
        reviewContainer.appendChild(reviewElement);
    });
}

function createReview(review) {

    const reviewElement = document.createElement('div');
    reviewElement.classList = ['review'];

    const description = document.createElement('p');
    description.classList = ['description']
    description.innerHTML = review.description;
    reviewElement.appendChild(description);
    
    const rating = document.createElement('p');
    rating.innerHTML = review.rating + '/5';
    reviewElement.appendChild(rating);

    const deleteButton = document.createElement('button');
    deleteButton.classList = ['delete-btn'];
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = () => deleteReview(reviewElement.id);
    reviewElement.appendChild(deleteButton);

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
    
    saveToLocalStorage(newReview);
    renderReviews();
    
    document.getElementById('review-description').value = '';
    document.getElementById('review-rating').value = '';
}

function deleteReview(id) {
    console.log('id: ', id);
    let reviews = loadFromLocalStorage();

    reviews = reviews.filter((r, idx) => idx !== parseInt(id));
    updateLocalStorage(reviews);
    
    renderReviews();
}


function calculateAvgRating(reviews) {

    if (!reviews.length) 
        return 0;

    let ratingSum = 0;
    reviews.forEach( r => ratingSum += parseInt(r.rating));

    return Math.round(ratingSum / reviews.length * 10) / 10;
}

renderReviews();
