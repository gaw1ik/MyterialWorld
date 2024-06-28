
versionNumber = "2e";
//console.log("version ", versionNumber);





function resize() {

    let innerWidth = window.innerWidth;

    console.log("resize")

    if(innerWidth<1100) {
        desktopNavBar.style.display = "none";
        hamburger.style.display = "block";
    } else {
        desktopNavBar.style.display = "flex";
        hamburger.style.display = "none";
    }

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
    pageContainer1 = document.getElementById("pageContainer1");
    desktopNavBar = document.getElementById("desktopNavBar");
    hamburger = document.getElementById("hamburger");
    hamburgermenu = document.getElementById("hamburgermenu");    
    menucurtain = document.getElementById("menucurtain");

    hamburger.addEventListener('mousedown',openhamburger);

    resize();
}












