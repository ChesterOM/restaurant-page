    const createHeader = function() {
    const header = document.createElement("div");
    header.id = "header";

    const nav = document.createElement("div")
    nav.classList.add("nav");

    const homeButton = document.createElement("button");
    homeButton.id = "home";
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.id = "menu";
    menuButton.textContent = "Menu";

    const aboutButton = document.createElement("button");
    aboutButton.id = "about";
    aboutButton.textContent = "About";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    header.appendChild(nav);

    return header;
  }; 
  
  const createPageBody = function(){
    const pagebody = document.createElement("div");
    pagebody.id = "page-body";

    const h1 = document.createElement("h1");
    h1.textContent = "The Bear";

    const p = document.createElement("p");
    p.textContent = "hello this is a check for the real font that i need working"
  
    pagebody.appendChild(h1);
    pagebody.appendChild(p);
    
    return pagebody;
};

const createFooter = function() {
    const footer = document.createElement("div");
    footer.id = "footer";

    const p = document.createElement("p");
    p.textContent = "test test test test test";

    footer.appendChild(p);

    return footer;
};

const intialPageLoader = function() {
    const contentDiv = document.getElementById("content");

    const header = createHeader();
    const pagebody = createPageBody();
    const footer = createFooter();

    contentDiv.appendChild(header);
    contentDiv.appendChild(pagebody);
    contentDiv.appendChild(footer);
};


export { intialPageLoader } ;