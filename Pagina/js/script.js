$(document).ready(function() {
    $('.slider').slider();
    $('.carousel').carousel();
    $('.tooltipped').tooltip();
});

function ocultarMapa() {

    document.getElementsByClassName("mapa").style.display = "none";

}

function mostrarMapaBuenosAires() {
    document.getElementById("mapa").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.5526966884861!2d-58.4459856!3d-34.5934998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f680cb2679%3A0x8b0a61b3eb088c0!2sHumboldt%20590%2C%20C1414%20CSL%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1607042178281!5m2!1ses-419!2sar");
    document.getElementById("bsas").setAttribute("class", "waves-effect waves-light btn green");
    document.getElementById("jujuy").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("chubut").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("mendoza").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("neuquen").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("salta").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");

}

function mostrarMapaJujuy() {
    document.getElementById("mapa").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.7356970595188!2d-65.30959688532184!3d-24.181000390650123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f6ae509b4a3%3A0xb92f8660cc7cf0ab!2sAv.%20Gdor.%20Jos%C3%A9%20Mar%C3%ADa%20Fascio%201020%2C%20San%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1ses-419!2sar!4v1607306070870!5m2!1ses-419!2sar");
    document.getElementById("jujuy").setAttribute("class", "waves-effect waves-light btn green");
    document.getElementById("bsas").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("chubut").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("mendoza").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("neuquen").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("salta").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");


}

function mostrarMapaChubut() {
    document.getElementById("mapa").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2905.677899147076!2d-65.315936!3d-43.258172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe0144c1b0cf1969%3A0x2b6d77823f951ca6!2sJulio%20Argentino%20Roca%20799%2C%20Trelew%2C%20Chubut!5e0!3m2!1ses-419!2sar!4v1607306681288!5m2!1ses-419!2sar");
    document.getElementById("chubut").setAttribute("class", "waves-effect waves-light btn green");
    document.getElementById("bsas").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("jujuy").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("mendoza").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("neuquen").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("salta").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
}

function mostrarMapaMendoza() {
    document.getElementById("mapa").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3350.800328850043!2d-68.85712!3d-32.877002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08f884fe9a53%3A0x2d068cfb3fa513fc!2sSuipacha%20800%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1607307451662!5m2!1ses-419!2sar");
    document.getElementById("mendoza").setAttribute("class", "waves-effect waves-light btn green");
    document.getElementById("bsas").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("jujuy").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("chubut").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("neuquen").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("salta").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
}

function mostrarMapaNeuquen() {
    document.getElementById("mapa").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.790517699301!2d-68.10806968485619!3d-38.951613807772674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA1LjgiUyA2OMKwMDYnMjEuMiJX!5e0!3m2!1ses-419!2sar!4v1607307593161!5m2!1ses-419!2sar");
    document.getElementById("neuquen").setAttribute("class", "waves-effect waves-light btn green");
    document.getElementById("bsas").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("jujuy").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("chubut").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("mendoza").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("salta").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
}

function mostrarMapaSalta() {
    document.getElementById("mapa").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28979.98354501643!2d-65.43817042382753!3d-24.778397359668404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ3JzAwLjgiUyA2NcKwMjUnNTAuMyJX!5e0!3m2!1ses-419!2sar!4v1607307875210!5m2!1ses-419!2sar");
    document.getElementById("salta").setAttribute("class", "waves-effect waves-light btn green");
    document.getElementById("bsas").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("jujuy").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("chubut").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("mendoza").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");
    document.getElementById("neuquen").setAttribute("class", "waves-effect waves-light btn #a5d6a7 green lighten-3");

}

$(document).ready(function() {
    $('.materialboxed').materialbox();
});