
// versionNumber = "1.07b";
// console.log("version ", versionNumber);





function resize() {

    let innerWidth = window.innerWidth;

    console.log("resize")

    if(innerWidth<1100) {
        // console.log(innerWidth,"innerWidth");
        desktopNavBar.style.display = "none";
        // document.getElementById("sidebar").style.display = "none";
        hamburger.style.display = "block";
    } else {
        desktopNavBar.style.display = "flex";
        // document.getElementById("sidebar").style.display = "flex";
        hamburger.style.display = "none";
    }

    // document.getElementById("desktopNavBar").style.display = "none";
    // document.getElementById("sidebar").style.display = "none";
    // document.getElementById("hamburgerContainer").style.display = "none";
}



function openhamburger() {
    console.log("openhamburger")

    menucurtain.className = "menucurtainopen";
    hamburgermenu.className = "hamburgermenuopen";

    document.body.style.overflow = "hidden";

    menucurtain.addEventListener('mousedown', closehamburger);

}

function closehamburger() { 
    console.log("closehamburger")

    menucurtain.className = "menucurtainclosed";
    hamburgermenu.className = "hamburgermenuclosed";

    document.body.style.overflow = "scroll";
}




window.onload = function () {

    console.log("page load")

    window.addEventListener("resize", resize);

    headerContainer = document.getElementById("headerContainer");
    pageContainer2 = document.getElementById("pageContainer2");

    desktopNavBar = document.getElementById("desktopNavBar");

    // headerContainer.style.display = "flex";
    // pageContainer2.style.display = "flex";

    hamburger = document.getElementById("hamburger");
    hamburgermenu = document.getElementById("hamburgermenu");

    // hamburger.style.display = "none";

    

    menucurtain = document.getElementById("menucurtain");



    hamburger.addEventListener('mousedown',openhamburger);

    resize();
}












