const navSwitch = function() {
    
    const buttons = document.querySelectorAll("button");

    // Add event listeners to each button
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove the "focused" class from all buttons
            buttons.forEach((btn) => btn.classList.remove("focused"));

            // Add the "focused" class to the clicked button
            this.classList.add("focused");
        });
    });
};

export {navSwitch}