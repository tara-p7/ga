//Side menu 

//Get hamburger menu and add click to trigger side menu
document.querySelector('.hamburger-menu').addEventListener("click", sideMenuAppears);

function sideMenuAppears() {
    document.querySelector('.side-menu').classList.add('show-side-menu');
}
//Get close button and remove side menu
document.querySelector('.side-menu-close').addEventListener("click", sideMenuDisappears);

function sideMenuDisappears() {
    document.querySelector('.side-menu').classList.remove('show-side-menu');
}

//Modal

//Define variables that need to be targeted
const dialog = document.querySelector('.modal-content');
const showNavDialog = document.querySelector('#get-in-touch-nav');
const closeDialog = document.querySelector('.modal-close');
const showSideDialog = document.querySelector('#get-in-touch-sidebar');

//Click to trigger from Main Nav
showNavDialog.addEventListener("click", dialogAppear);

//Click to trigger from Side Menu
showSideDialog.addEventListener("click", dialogAppear);


function dialogAppear() {
    dialog.showModal();
}

closeDialog.addEventListener("click", dialogClose);

function dialogClose() {
    dialog.close();
}


//Collapsible content

//Get button
const collapsibleElements = document.querySelectorAll('.collapsible');


//Apply function to each collapsible
collapsibleElements.forEach(function (collapsibleElement, index) {

    collapsibleElement.addEventListener("click", function(element) {
       const elementSiblings = element.currentTarget.parentElement.children;
       Array.from(elementSiblings).forEach(function (elementSibling, index) {

 //Reveal Collapsible and Change to + or - based on current state       

       const buttonCurrent = elementSibling.parentElement.querySelector("BUTTON").querySelector("SPAN"); 

        if (elementSibling.tagName === "P" && !elementSibling.classList.contains("show-collapsible")) {
            elementSibling.classList.add("show-collapsible");

            buttonCurrent.innerText = "-";
        }

        else {elementSibling.classList.remove("show-collapsible");
        
        buttonCurrent.innerText = "+";
    }
       })  
    })
})



 