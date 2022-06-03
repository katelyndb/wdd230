const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });

}, imgOptions)


images.forEach (image => {
    imgObserver.observe(image);
})






























// WHAT THE FLIP FLOP

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};
// first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    // Creates an imgObserver
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            // If the item is intersecting, load the images
            if(item.isIntersecting) {
                loadImages(item.target);
                // Once the image is loaded, stop observing it.
                imgObserver.unobserve(item.target);
            }
        })
    }, imgOptions);
// Loop through each img to check the status and load the image if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { // Load all the images if it is not supported.
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

