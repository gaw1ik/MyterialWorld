
// versionNumber = "1.07b";
// console.log("version ", versionNumber);



//window.addEventListener('DOMContentLoaded', () => {
// borderOffProperty = "1px solid rgba(100, 100, 100, 0.0)";
// borderOnProperty  = "1px solid white";


navToggleOn = -1;



function resize() {

    let innerWidth = window.innerWidth;

    console.log("resize")

    if(innerWidth<1100) {
        // console.log(innerWidth,"innerWidth");
        document.getElementById("desktopNavBar").style.display = "none";
        // document.getElementById("sidebar").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    } else {
        document.getElementById("desktopNavBar").style.display = "flex";
        // document.getElementById("sidebar").style.display = "flex";
        document.getElementById("hamburger").style.display = "none";
    }

    // document.getElementById("desktopNavBar").style.display = "none";
    // document.getElementById("sidebar").style.display = "none";
    // document.getElementById("hamburgerContainer").style.display = "none";
}



window.addEventListener("resize", resize);


function openhamburger() {
    console.log("openhamburger")
    // hamburgermenu.style.display = "flex";

    // menucurtain.style.display = "flex";

    menucurtain.className = "menucurtainopen";
    hamburgermenu.className = "hamburgermenuopen";


    document.body.style.overflow = "hidden";

    menucurtain.addEventListener('mousedown', closehamburger);

    // document.body.style.opacity = "10%";

}

function closehamburger() { 
    console.log("closehamburger")

    // menucurtain.style.display = "none";
    // hamburgermenu.style.display = "none";

    menucurtain.className = "menucurtainclosed";
    hamburgermenu.className = "hamburgermenuclosed";



    // hamburger.style.display = "block";

    document.body.style.overflow = "scroll";
}




window.onload = function () {

    document.getElementById("pageContainer1").style.display = "flex";
    document.getElementById("pageContainer2").style.display = "flex";


    hamburger = document.getElementById("hamburger");
    hamburgermenu = document.getElementById("hamburgermenu");
    

    menucurtain = document.getElementById("menucurtain");



    hamburger.addEventListener('mousedown',openhamburger);

    resize();
}


//     // get elements for the pageButtons and pageContainers
//     pageButtons = document.getElementsByClassName("pageButton");
//     pageContainers = document.getElementsByClassName("pageContainer");


    

    



//     // when you first open the page you'll want to mute all pages except for one.
//     for(let i=0; i<pageContainers.length; i++) {
//         pageContainers[i].style.display = "none";
//         pageButtons[i].style.borderBottom = borderOffProperty;
//     }

//     let defaultPageIndex = 0;

//     pageContainers[defaultPageIndex].style.display = "block";
//     pageButtons[defaultPageIndex].style.borderBottom = borderOnProperty;



//     // add the pageButton event listeners
//     for(let i=0; i<pageButtons.length; i++) {

//         pageButtons[i].addEventListener( "click", onPageButtonClick );
    
//     }






//     // Nav Toggle Stuff
//     navToggleButton = document.getElementById("navToggleButton");
//     navbar = document.getElementById("navbar");
//     navToggleButton.addEventListener( "click", onNavToggleButtonClick );
    

// };










// function onPageButtonClick() {

//     //console.log(this.id);

//     for(let i=0; i<pageContainers.length; i++) {
//         pageContainers[i].style.display = "none";
//         pageButtons[i].style.borderBottom = borderOffProperty;
//     }

//     let pageIndex = getNamedIndexOfElement("Page", this);

//     // // for changing image heights depending on the page selected
//     // if(pageIndex==1) {
//     //     document.documentElement.style.setProperty('--image-height', '70vh');
//     // }

//     pageContainers[pageIndex].style.display = "block";
//     pageButtons[pageIndex].style.borderBottom = borderOnProperty;

//     onNavToggleButtonClick();

// }







// function onNavToggleButtonClick() {

//     if( navToggleOn == 1 ) {

//         // navbar.style.display = "none";
//         navbar.className = "navbarClosed";

//     } else if ( navToggleOn == -1 ) {

//         // navbar.style.display = "flex";
//         navbar.className = "navbarOpen";

//     }

//     // flip the value of navToggleOn
//     navToggleOn = navToggleOn * -1;

//     //console.log("navToggleOn",navToggleOn)
    
// }














