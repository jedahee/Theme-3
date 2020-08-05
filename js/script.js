var raya1 = document.getElementById("raya1");
var raya2 = document.getElementById("raya2");
var proyect = document.getElementById("proyect");
var cabout = document.getElementById("about");
raya1.addEventListener(
    "click",
    function(){
        raya1.classList.add("opacidad");
        raya1.classList.remove("menos_opacidad");
        proyect.classList.remove("no_mostrar");
        raya2.classList.remove("opacidad");
        raya2.classList.add("menos_opacidad");
        cabout.classList.add("no_mostrar");
    });

raya2.addEventListener(
    "click",
    function(){
        raya2.classList.add("opacidad");
        raya2.classList.remove("menos_opacidad");
        cabout.classList.remove("no_mostrar");
        raya1.classList.remove("opacidad");
        raya1.classList.add("menos_opacidad");
        proyect.classList.add("no_mostrar");
    });
