document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("tumbling-image");
    const startIncreasingSizeAt = 1000;
    const maxSize = 350;

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY;

        // Apply tumbling effect
        const rotation = scrollY / 5; // Adjust the division factor to control the rotation speed
        image.style.transform = "translate(-50%, -50%) rotate(" + rotation + "deg)";

        // Increase size smoothly after scrolling 1000 pixels
        if (scrollY > startIncreasingSizeAt) {
            const newSize = Math.min(100 + (scrollY - startIncreasingSizeAt), maxSize);
            image.style.width = newSize + "px";
            image.style.height = newSize + "px";

            // Check if the new image element doesn't exist, create it and append it
            if (!document.getElementById("additional-image")) {
                const additionalImage = document.createElement("img");
                additionalImage.id = "additional-image";
                additionalImage.src = "coffeepour1.png"; // replace with the actual source
                additionalImage.alt = "Additional Image";
                additionalImage.style.width = "350px"; // set the initial size
                additionalImage.style.height = "350px"; // set the initial size
                document.body.appendChild(additionalImage);
            }
        }
        // Reset size to the initial state and remove the additional image when scrolling back up
        else {
            image.style.width = "200px"; // set the initial size
            image.style.height = "200px"; // set the initial size

            const additionalImage = document.getElementById("additional-image");
            if (additionalImage) {
                additionalImage.remove();
            }
        }

        lastScrollY = scrollY;
    });
});
