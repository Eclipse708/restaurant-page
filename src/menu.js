import coffee1 from "./images/coffee-1.png";
export {menu};

const menu = function() {
    const div = document.querySelector('#content');
    div.innerHTML = "";
    const h1 = document.createElement('h1');
    const menuItems = [
        {heading: 'Espresso', desc: 'Rich and bold, freshly brewed for a perfect pick-me-up.', price: '$3', imgSrc: coffee1 },
        {heading: 'Cappuccino', desc: 'Rich and bold, freshly brewed for a perfect pick-me-up.', price: '$3.5', imgSrc: coffee1 },
        {heading: 'Latte', desc: 'Rich and bold, freshly brewed for a perfect pick-me-up.', price: '$4', imgSrc: coffee1 },
    ];

    h1.textContent = "Menu";
    div.appendChild(h1);

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        // each iteration creates new html elements
        const itemHeading = document.createElement('h2');
        const itemDesc = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemImg = document.createElement('img');
        
        // assigining contents to html elementsls
        itemHeading.textContent = item.heading;
        itemDesc.textContent = item.desc;
        itemPrice.textContent = item.price;
        itemImg.src = item.imgSrc;

        card.appendChild(itemImg);
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        textContainer.appendChild(itemHeading);
        textContainer.appendChild(itemDesc);
        textContainer.appendChild(itemPrice);
        card.appendChild(textContainer);

        div.appendChild(card);
    });
}