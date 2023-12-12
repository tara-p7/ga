//Side menu - get hamburger menu and add click to trigger side menu
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


//Collapsible Content

//Get collapsible class (button) and direct to action on click
document.querySelector(".collapsible").addEventListener("click", function(event){
    event.preventDefault();
    showCollapsible();
});

//click function to open and close collapsible based on condition of content (open or closed)
function showCollapsible() {
    const plusMinusSymbol = document.querySelector(".plus-minus-symbol")
    console.log(plusMinusSymbol)
    const content = document.querySelector(".collapsible-content");

    if (content.classList.contains('show-collapsible')) {
        content.classList.remove('show-collapsible');
        plusMinusSymbol.innerText = "+";
    }
    else {
        content.classList.add('show-collapsible');
        plusMinusSymbol.innerText = "-";
    }
}

