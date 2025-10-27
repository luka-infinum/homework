
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

    if (avgRating)
        avgRatingPlaceholder.innerHTML = avgRating + ' / 5';
    else
        avgRatingPlaceholder.innerHTML = '';

    reviews.forEach((review, index) => {
        const reviewElement = createReview(review);
        reviewElement.id =index;
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

    
    const ratingContainer = document.createElement('div');
    ratingContainer.classList = ['rating-container'];

    const rating = document.createElement('p');
    rating.innerHTML = review.rating + '/5';
    ratingContainer.appendChild(rating);

    const starRating = document.createElement('div');
    starRating.classList = ['stars-rating'];
    for (let index = 1; index <= 5; index++) {
        const el = document.createElement('div');
        el.innerHTML = '⭑';
        
        if (index <= review.rating)
            el.classList = ['star star-btn-selected'];
        else
            el.classList = ['star'];
        
        starRating.appendChild(el);
    }

    ratingContainer.appendChild(starRating);
    reviewElement.appendChild(ratingContainer);


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
    resetStars();
}

function deleteReview(id) {
    let reviews = loadFromLocalStorage();

    reviews = reviews.filter((review, index) => index !== parseInt(id));
    updateLocalStorage(reviews);
    
    renderReviews();
}


function calculateAvgRating(reviews) {

    if (!reviews.length) 
        return null;

    const ratingSum = reviews.reduce((accumulator, review) => accumulator + parseInt(review.rating), 0)
    
    return (ratingSum / reviews.length).toFixed(2);
}


function resetStars() {
    const starsContainer = document.getElementById('stars-rating');
    starsContainer.childNodes.forEach(el => el.classList = ['star-btn']);
}

function starClick(rating) {
    const starsContainer = document.getElementById('stars-rating');
    
    starsContainer.childNodes.forEach(el => {
        if (parseInt(el.id) <= rating) 
            el.classList.add('star-btn-selected');
        else
            el.classList = ['star-btn'];
    });
    
    const reviewRating = document.getElementById('review-rating');
    reviewRating.value = rating;
}



renderReviews();