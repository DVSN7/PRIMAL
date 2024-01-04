document.addEventListener("DOMContentLoaded", function () {
    const randomImage = document.getElementById("randomImage");
    const backgroundButton = document.getElementById("backgroundButton");
    const imageCount = 130; 
    const imagePath = "images"; 
    const imageExtension = ".jpg"; 

function getRandomImageURL() {
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    const paddedIndex = String(randomIndex).padStart(3, '0'); 
    return `${imagePath}image${paddedIndex}${imageExtension}`;
}

    function loadRandomImage() {
        const imageURL = getRandomImageURL();
        randomImage.src = imageURL;
    }

    loadRandomImage();
    randomImage.addEventListener("click", loadRandomImage);

    let backgroundToggle = true; 
    backgroundButton.addEventListener("click", function () {
        if (backgroundToggle) {
            document.body.style.backgroundColor = "#1b1b1b";
            backgroundToggle = false;
        } else {
            document.body.style.backgroundColor = "#dcdcdc";
            backgroundToggle = true;
        }
    });
});
