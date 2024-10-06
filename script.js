// Function to enter the site and hide the welcome screen with a transition sound
function enterSite() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const transitionSound = document.getElementById('transition-sound');

    // Play the transition sound
    transitionSound.play();

    // Smooth transition for hiding the welcome screen
    welcomeScreen.style.transition = 'opacity 1s ease-out';
    welcomeScreen.style.opacity = '0';

    // Delay to ensure the opacity transition completes before hiding the element
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('show');
    }, 500); // Match the duration of the opacity transition
}

// Function to show popup with information about the area
// Function to show popup with information about the area
function showPopup(info, image) {
    const popupBox = document.getElementById('popup-box');
    const popupContent = document.getElementById('popup-content');
    const popupParagraph = document.getElementById('popup-paragraph');
    const popupImage = document.getElementById('popup-image');

    popupParagraph.textContent = info; // Set the content of the popup
    popupImage.src = image; // Set the image source
    popupImage.alt = 'Image of ' + info; // Set the image alt text
    popupBox.classList.remove('hidden'); // Show the popup
    popupBox.classList.add('show'); // Add show class for scaling effect
}

// Function to close the popup
function closePopup() {
    const popupBox = document.getElementById('popup-box');
    popupBox.classList.remove('show'); // Remove the show class for scaling effect
    popupBox.classList.add('hidden'); 
    // Wait for the animation to complete before hiding
    setTimeout(() => {
    
    }, 300); // Delay to allow for animation to complete
}

// Existing functions for interactivity
function showChemosynthesisAnimation() {
    alert('Playing animation about Chemosynthesis...');
}

function showLifeAnimation() {
    alert('Playing animation about Life on Europa...');
}
