import restaurantBanner from "./images/coffee-shop.png";
// named export
export {pageLoad};

const pageLoad = function() {
    const div = document.querySelector('#content');
    div.innerHTML = "";
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    h1.textContent = "Welcome to Delightful Bites";
    img.src = restaurantBanner;
    p.textContent = "At Delightful Bites, we serve a blend of traditional flavors and modern dishes that will tantalize your taste buds. Our chefs are committed to using fresh, high-quality ingredients in every dish. Whether you're here for a quick lunch or a leisurely dinner, we promise a delightful experience every time.";
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
} 