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

/*
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
*/

const ACCESS_TOKEN = 'USyfriJAWdPLKOXdB3p7Ij9MdP7aSPUh5O';

const API_AH =`https://us.api.blizzard.com/data/wow/connected-realm/86/auctions?namespace=dynamic-us&locale=en_US&access_token=${ACCESS_TOKEN}`;

let codigo = 171285;

async function buscaPokemon(codigo) {
  let url = API_AH
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myJson = await response.json();

  // Has tus converciones aqui
  let arregloRespuesta = myJson
  return arregloRespuesta;
}

function buscar(item) {
  let ItemPrices= {codigo:item.item.id, precio:item.unit_price};
  return ItemPrices;
}


//let ar = [1,2,3,4,5]


 
//console.log(ar.filter((x)=>x.id<=2));


buscaPokemon(codigo)
.then((arreglo) => arreglo.auctions)
.then((arreglo) => arreglo.map(buscar))
//.then((arreglo) => arreglo.map(buscar2))
.then((arreglo) => arreglo.filter((x)=>x.codigo==codigo))
//.then((arreglo) => arreglo.codigo)
.then((arreglo) => arreglo.map((x)=>x.precio))
.then((arreglo) => Math.min(...arreglo)/10000)

//.then((arreglo) => arreglo.filter((x)=>x.precio<=Math.min(...x.precio)))
.then((arreglo)=>console.log(arreglo))
.catch(e => console.log(e));









//const API_AH =`https://us.api.blizzard.com/data/wow/connected-realm/86/auctions?namespace=dynamic-us&locale=en_US&access_token=${ACCESS_TOKEN}`;

fetch(`${API_AH}`)
  .then((response) => response.json())
  .then((ah) => {

   //console.log(ah)
    
    
    

  })



 


const API_URL =
  `https://us.api.blizzard.com/data/wow/profession/171/skill-tier/2750?namespace=static-us&locale=es_ES&access_token=${ACCESS_TOKEN}`;

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement("ul");
let array =[];
let arr = [2,3,4,5,400];
//array.push(10000888)
fetch(`${API_URL}`)
  .then((response) => response.json())
  .then((covenant) => {
    covenant.categories.forEach((we) => {
      let elem = document.createElement("li");

      elem.appendChild(document.createTextNode(`${we.name}`));

      ul.appendChild(elem);
        var aux = 0;
      we.recipes.forEach((r) => {
        let elem2 = document.createElement("li");

        const API_URL_ITEMS = `https://us.api.blizzard.com/data/wow/recipe/${r.id}?namespace=static-us&locale=es_ES&access_token=${ACCESS_TOKEN}`;

        fetch(`${API_URL_ITEMS}`)
          .then((response) => response.json())
          .then((item) =>   item.crafted_item.id)
          .then((item) =>   elem2.appendChild(document.createTextNode(`---${r.name} = ${item}`)))
          .then((item) =>   console.log(""))

          // console.log(aux)
            //let id2 = item.;
            //elem2.appendChild(document.createTextNode(`---${r.name} = ${id2}`));
            
            //arr.push(1005)
            
          
            
          //arr.push(1005)
          //array.push(r)
        ul.appendChild(elem2);
        
      });
    });
    //console.log(array);
    //console.log(arr);
    
    
    let result = arr.filter((d) => d >  40 );
    //console.log(result);
    
    HTMLResponse.appendChild(ul);
  });
