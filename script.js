const button = document.getElementById("moon__sun");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const body = document.getElementById("body");
const favicon = document.getElementById('favicon');

const udnerHeader = document.querySelector(".under-header");
const calculator = document.querySelector(".calculator");

const group__net = document.querySelector(".group__net");
const group__wifi = document.querySelector(".group__wifi");
const group__block = document.querySelector(".group__block");

const time__p = document.querySelector(".time__p");
const input__p = document.querySelector(".input__p");
const result__p = document.querySelector(".result__p");

const del = document.querySelector(".del");
const plus_munis = document.querySelector(".plus_munis");

const footer = document.querySelector(".footer");

const button_p = Array.from(document.querySelectorAll(".button_p"));
const b_gray = Array.from(document.querySelectorAll(".b-gray"));
const gray = Array.from(document.querySelectorAll(".gray"));
const blue = Array.from(document.querySelectorAll(".blue"));

button.onclick = () => {
    const isDark = favicon.getAttribute('href') === 'img/moon.svg';
    favicon.setAttribute('href', isDark ? 'img/sun.svg' : 'img/moon.svg');

    let con = button.style.left === "44px";
    button.style.left = con? "" : "44px";
    button.style.background = con? "" : "#D2D3DA";
    moon.style.opacity = con? "" : "0";
    sun.style.opacity = con? "" : "1";
    udnerHeader.style.background = con? "" : "#fff";
    body.style.background = con? "" : "#17171C";
    calculator.style.background = con? "" : "#F1F2F3";

    time__p.style.color = con? "" : "black";
    input__p.style.color = con? "" : "black";
    result__p.style.color = con? "" : "black";

    footer.style.background = con? "" : "black";

    button_p.forEach(el => el.style.color = con ? "" : "black");
    b_gray.forEach(el => el.style.background = con ? "" : "#fff");
    gray.forEach(el => el.style.background = con ? "" : "#D2D3DA");
    blue.forEach(el => el.style.background = con ? "" : "#4B5EFC");

    del.src = con? "img/del.svg" : "img/del-b.svg";
    plus_munis.src = con? "img/plus_munis.svg" : "img/plus_munis-b.svg";

    group__net.src = con? "img/group__net.svg" : "img/group__net-b.svg";
    group__wifi.src = con? "img/group__wifi.svg" : "img/group__wifi-b.svg";
    group__wifi.style.width = con? "" : "15.27px";
    group__wifi.style.height = con? "" : "10.97px";
    group__block.src = con? "img/group__block.svg" : "img/group__block-b.svg";
}