import coffee1 from "./images/coffee-1.png";
export {menu};

const menu = function() {
    const div = document.querySelector('#content');
    div.innerHTML = "";
    const h1 = document.createElement('h1');
    const menuItems = [
        {heading: 'Coffee 1', desc: 'Delicious Coffee 1', price: '$2', imgSrc: coffee1 },
        {heading: 'Coffee 2', desc: 'Delicious Coffee 2', price: '$2.5', imgSrc: coffee1 },
        {heading: 'Coffee 3', desc: 'Delicious Coffee 3', price: '$3', imgSrc: coffee1 },
    ];

    h1.textContent = "Menu";
    div.appendChild(h1);

    menuItems.forEach(item => {
        // each iteration creates new html elements
        const itemHeading = document.createElement('h2');
        const itemDesc = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemImg = document.createElement('img');
        
        // assigining contents to html elements
        itemHeading.textContent = item.heading;
        itemDesc.textContent = item.desc;
        itemPrice.textContent = item.price;
        itemImg.src = item.imgSrc;

        div.appendChild(itemHeading);
        div.appendChild(itemDesc);
        div.appendChild(itemPrice);
        div.appendChild(itemImg);
    });
}