const setMenuBody = function() {
    const pagebody = document.getElementById("page-body");
    pagebody.innerHTML = "";

    const menu = document.createElement("div");
    menu.id = "menu-tab";

    const items = ["Italian beef sandwich", "Meatball sub", "Chicken parm sandwich", "Baked mostaccioli", "Soup of the day", "Cannoli"];

    for (let i = 0; i < items.length; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menuItem");
        itemDiv.innerHTML = "<h2>" + items[i] + "</h2>";
        menu.appendChild(itemDiv);
    }

    pagebody.appendChild(menu);
}

export { setMenuBody }








