// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart1.gif
        });
        audioContainer.remove();
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';
        displayCatCrying(); // Display the cat-crying.gif

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 1000); // Flash colors for 1 second
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart1.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart1
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart1 image
    catHeartImage.src = 'cat-heart1.gif'; // Assuming the cat-heart1 image is named "cat-heart1.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart1 image is fully loaded, add it to the image container
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Function to display the cat-crying.gif
function displayCatCrying() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart1
    var catCryingImage = new Image();
    // Set the source (file path) for the cat-crying image
    catCryingImage.src = 'cat-crying.gif'; // Assuming the cat-crying image is named "cat-crying.gif"
    // Set alternative text for the image (for accessibility)
    catCryingImage.alt = 'Cat Crying';

    document.getElementById('question').style.display = 'none';
    document.getElementById('please').style.display = 'block';


    audioContainer = document.getElementById('please');
    audioElement = document.createElement('audio');
    audioElement.controls = false; // Add controls for play, pause, etc.
    audioElement.autoplay = true;
    audioElement.loop = true;

    // Create a source for the audio element
    const source = document.createElement('source');
    source.src = './cry-banana-cat.mp3'; // Specify the audio file path
    source.type = 'audio/mp3'; // Specify the audio type

    // Append the source to the audio element
    audioElement.appendChild(source);

    // Append the audio element to the container
    audioContainer.appendChild(audioElement);

    // When the cat-crying image is fully loaded, add it to the image container
    catCryingImage.onload = function () {
        imageContainer.appendChild(catCryingImage);
        // Hide the options container
        // document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
