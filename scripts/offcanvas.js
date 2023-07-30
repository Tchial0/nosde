hideOffCanvas = function (event){
    event.stopPropagation();
    btnOffcanvasCloser.click();
}

var navlinks = document.querySelectorAll(".nav-link");

for(let i =0;i<navlinks.length;i++){
    let navLink = navlinks[i];
    navLink.addEventListener("click",hideOffCanvas);
}