import carmy from './carmy.jpg';

const setAboutBody = function() {
    const pagebody = document.getElementById("page-body");
    pagebody.innerHTML = "";

    const about = document.createElement("div");
    about.id = "about-tab";

    const imageWrapper = document.createElement("div");
    imageWrapper.id = "image-wrapper";

    const image = document.createElement("img");
    image.id = "image";
    image.src = carmy;

    imageWrapper.appendChild(image);
    about.appendChild(imageWrapper);

    const aboutContent = document.createElement("div");
    aboutContent.id = "about-content"
    aboutContent.textContent = "The Bear is my way of sharing my passion for Italian cuisine and honoring my family's legacy in Chicago's restaurant scene. After years working in high-end kitchens and Michelin star restaurants, I've come home to run my family's little River North joint. My mission is simple - serve unfussy, craveable Italian classics like my Nona used to make. I'm bringing The Bear back to its roots with slow-simmered sauces, hand-rolled pasta, and only the freshest ingredients. Diners can expect a cozy, bustling atmosphere with the warm hospitality that my family was known for. While the road hasn't been easy, I'm committed to preserving the heart of this place while evolving its culinary offerings. The Bear isn't about chasing accolades or trends - it's about delivering the authentic Italian comfort food experience that Chicagoans have loved for decades. I invite you to join us for a taste of the old neighborhood."

    about.appendChild(aboutContent);

    const signature = document.createElement("div");
    signature.id = "signature";
    signature.textContent = "-Carmen \"Carmy\" Berzatto"

    about.appendChild(signature);
    pagebody.appendChild(about);
    

};

export { setAboutBody }
