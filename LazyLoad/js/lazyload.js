const imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
}

of ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items,observer) => {
        items.forEach((item) => {
            loadImages(img);
        });
    });
}
