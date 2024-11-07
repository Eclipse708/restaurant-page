export {aboutUs};

const aboutUs = function() {
    const div = document.querySelector("#content");
    div.textContent = "";
    const h1 = document.createElement('h1');
    const aboutUsInfo = [
        {heading:"Person 1", title:'Title 1', phone:'12345678', email:'test@email.com'},
        {heading:"Person 2", title:'Title 2', phone:'12345678', email:'test2@email.com'},
        {heading:"Person 3", title:'Title 3', phone:'12345678', email:'test3@email.com'},
    ];

    h1.textContent = 'About Us';
    div.appendChild(h1);

    for (let i = 0; i < aboutUsInfo.length; i++) {
        const item = aboutUsInfo[i];
        const name = document.createElement('p');
        const title = document.createElement('p');
        const phone = document.createElement('p');
        const email = document.createElement('p');

        name.textContent = item.heading;
        title.textContent = item.title;
        phone.textContent = item.phone;
        email.textContent = item.email;

        div.appendChild(name);
        div.appendChild(title);
        div.appendChild(phone);
        div.appendChild(email);
    }

};