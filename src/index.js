import { initialPageLoader, reset } from "./load";
import { navSwitch } from "./nav-switch";
import { setMenuBody } from "./menu";
import { setAboutBody } from "./about";
import './style.css';
import './carmy.jpg';

const homeClickHandler = () => {
    initPage();
};

const menuClickHandler = () => {
    setMenuBody();
};

const aboutClickHandler = () => {
    setAboutBody();
}

const initPage = () => {
    reset();
    initialPageLoader();
    navSwitch();
    setupListeners();
};

const setupListeners = () => {
    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const aboutButton = document.getElementById("about"); 
    

    homeButton.removeEventListener("click", homeClickHandler);
    menuButton.removeEventListener("click", menuClickHandler);
    aboutButton.removeEventListener("click", aboutClickHandler);
 
    homeButton.addEventListener("click", homeClickHandler);
    menuButton.addEventListener("click", menuClickHandler);
    aboutButton.addEventListener("click", aboutClickHandler);
};

document.addEventListener("DOMContentLoaded", () => {
    initPage();
});


