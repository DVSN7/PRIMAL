document.addEventListener("DOMContentLoaded", function () {
    const randomImage = document.getElementById("randomImage");
    const backgroundButton = document.getElementById("backgroundButton");

    const imageCount = 130; // Set this to the number of images in your database
    const imagePath = "https://dvsn7.github.io/PRIMAL/images/"; // Relative path to the "images" folder
    const imageExtension = ".jpg"; // Set the image file extension

    // Function to generate a random image URL
function getRandomImageURL() {
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    const paddedIndex = String(randomIndex).padStart(3, '0'); // Ensure three-digit format
    return `${imagePath}image${paddedIndex}${imageExtension}`;
}

    // Function to load a new random image
    function loadRandomImage() {
        // Generate a random image URL
        const imageURL = getRandomImageURL();

        // Set the src attribute of the img element to display the random image
        randomImage.src = imageURL;
    }

    // Preload a random image when the page loads
    loadRandomImage();

    // Make the image clickable to generate the next random image
    randomImage.addEventListener("click", loadRandomImage);

    // Toggle background color when the button is clicked
    let backgroundToggle = true; // Initial background state
    backgroundButton.addEventListener("click", function () {
        if (backgroundToggle) {
            document.body.style.backgroundColor = "#1b1b1b";
            backgroundToggle = false;
        } else {
            document.body.style.backgroundColor = "#dcdcdc";
            backgroundToggle = true;
        }
    });

randomImage.onerror = function() {
    console.error("Image failed to load:", this.src);
};

    
});
