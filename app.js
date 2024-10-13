function efectos(x) {
    const efectos = document.getElementsByClassName("efectos"); 
    if (x == 1) {
        efectos[0].style.textDecoration = "underline overline red";
    }
        else if (x == 2) {
        efectos[1].style.textDecoration = "underline overline red";
    }
        else if (x == 3) {
        efectos[2].style.textDecoration = "underline overline red";
    }
        else if (x == 4) {
        efectos[3].style.textDecoration = "underline overline red";
    }
        else {
        efectos[4].style.textDecoration = "underline overline red";
    }
}

function sinefectos() {
    const sinefectos = document.getElementsByClassName("efectos");
    for (let i = 0; i < sinefectos.length; i++) {
        sinefectos[i].style.textDecoration = "none";
    }
}
