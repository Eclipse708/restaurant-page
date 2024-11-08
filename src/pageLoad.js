import restaurantBanner from "./images/coffee-shop.png";
// named export
export {pageLoad};

const pageLoad = function() {
    const div = document.querySelector('#content');
    div.innerHTML = "";
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    h1.textContent = "Welcome to Brew Haven";
    img.src = restaurantBanner;
    p.textContent = "Crafted with passion, served with warmth. Savor every sip at Brew Haven.";
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
} 