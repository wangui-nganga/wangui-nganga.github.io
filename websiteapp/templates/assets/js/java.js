let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide ");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

// Initialize the slideshow
showSlides();

// Automatically show next slide every 3 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 3000);
