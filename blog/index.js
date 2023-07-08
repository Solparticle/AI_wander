const navOn = document.getElementById('navOn');
const navOff = document.getElementById('navOff');
const nav = document.getElementById('nav');

navOn.addEventListener('click', ()=> {
    nav.style.display = 'flex';
});

navOff.addEventListener('click', ()=> {
    nav.style.display = 'none';
});

// Get the required elements
const backButton = document.getElementById('all');
const forwardButton = document.getElementById('ai');
const scrollContainer = document.getElementById('scrollContainer');
const scrollItems = scrollContainer.getElementsByClassName('read');
let currentIndex = 0;

// Function to handle scrolling forward
function scrollForward() {
    if (currentIndex < scrollItems.length - 1) {
        scrollItems[currentIndex].classList.remove('active');
        currentIndex++;
        scrollItems[currentIndex].classList.add('active');
        scrollContainer.scrollTo({
            left: scrollItems[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
}

// Function to handle scrolling backward
function scrollBackward() {
    if (currentIndex > 0) {
        scrollItems[currentIndex].classList.remove('active');
        currentIndex--;
        scrollItems[currentIndex].classList.add('active');
        scrollContainer.scrollTo({
            left: scrollItems[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
}

// Attach event listeners to the buttons
forwardButton.addEventListener('click', scrollForward);
backButton.addEventListener('click', scrollBackward);

// Initialize the first element as active
scrollItems[currentIndex].classList.add('active');