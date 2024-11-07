// named import
import { pageLoad } from "./pageLoad";
import { menu } from "./menu";

pageLoad();

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');


homeBtn.addEventListener('click', () => {
    pageLoad();
});

menuBtn.addEventListener('click', () => {
    menu();
});

aboutBtn.addEventListener('click', () => {

});