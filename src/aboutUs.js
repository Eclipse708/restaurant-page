export {aboutUs};

const aboutUs = function() {
    const div = document.querySelector("#content");
    div.textContent = "";
    const h1 = document.createElement('h1');
    const aboutUsInfo = [
        {heading: "James Bennett", title: "Founder", phone: "555-987-1234", email: "james@brewhaven.com"},
        {heading: "Sofia Martinez", title: "Operations Manager", phone: "555-654-4321", email: "sofia@brewhaven.com"},
        {heading: "Liam O'Connor", title: "Lead Chef", phone: "555-321-8765", email: "liam@brewhaven.com"},
    ];

    h1.textContent = 'About Us';
    div.appendChild(h1);

    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.classList.add('about-container');

    for (let i = 0; i < aboutUsInfo.length; i++) {
        const item = aboutUsInfo[i];
        
        const card = document.createElement('div');
        card.classList.add('about-card');

        const name = document.createElement('p');
        const title = document.createElement('p');
        const phone = document.createElement('p');
        const email = document.createElement('p');

        name.textContent = item.heading;
        title.textContent = `Title: ${item.title}`;
        phone.textContent = `Phone: ${item.phone}`;
        email.textContent = `Email: ${item.email}`;

        card.appendChild(name);
        card.appendChild(title);
        card.appendChild(phone);
        card.appendChild(email);

        aboutUsContainer.appendChild(card);
    }

    div.appendChild(aboutUsContainer);
};