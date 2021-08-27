/*const API_URL = 'https://jsonplaceholder.typicode.com';
const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
.then((response)=>response.json())
.then((users)=>{
    users.forEach(user=>{
        let elem = document.createElement('li');
        elem.appendChild(
            document.createTextNode(`${user.name}✉${user.email}`)
        );
        ul.appendChild(elem);
    })
    HTMLResponse.appendChild(ul);
});*/



const API_URL ='https://us.api.blizzard.com/data/wow/covenant/index?namespace=static-us&locale=en_US&access_token=USZX0jYfaOTz6ShJr06rQM3FrhDrwffcx2';

//const API_URL = 'https://jsonplaceholder.typicode.com';
const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${API_URL}`)
.then((response)=>response.json())
.then((covenant)=>{    
    covenant['covenants'].forEach(we=>{
        let elem = document.createElement('li');
        elem.appendChild(
            document.createTextNode(`${we.name}✉${we.id}`)
        );
        ul.appendChild(elem);
    })
    HTMLResponse.appendChild(ul);
});