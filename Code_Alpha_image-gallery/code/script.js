let currentImageIndex = 0;
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    // Add more image paths as needed
];

document.getElementById('current-image').src = images[currentImageIndex];

function showImage(index) {
    currentImageIndex = index;
    document.getElementById('current-image').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    document.getElementById('current-image').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    document.getElementById('current-image').src = images[currentImageIndex];
}
