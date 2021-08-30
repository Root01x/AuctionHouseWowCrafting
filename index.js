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

const ACCESS_TOKEN = 'USKkEE1Vimnqscmml6TEScDVwS04WTT1CD';

const API_AH =`https://us.api.blizzard.com/data/wow/connected-realm/86/auctions?namespace=dynamic-us&locale=en_US&access_token=${ACCESS_TOKEN}`;

const API_RECIPIES =`https://us.api.blizzard.com/data/wow/recipe/42298?namespace=static-us&locale=en_US&access_token=${ACCESS_TOKEN}`;

const codigo = 171285;

async function buscaPokemon() {
  let url = API_AH
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myJson = await response.json();

  // Has tus converciones aqui
  let arregloRespuesta = myJson
  
  return arregloRespuesta.auctions;
}
//buscador de recetas para las ojetos dde alquimia
async function finder_recipes() {
  let url = API_RECIPIES;
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


function finder_prices_ah(valor){

buscaPokemon()
//.then((arreglo) => arreglo.auctions)
.then((arreglo) => arreglo.map(buscar))
//.then((arreglo) => arreglo.map(buscar2))
.then((arreglo) => arreglo.filter((x)=>x.codigo==valor))
//.then((arreglo) => arreglo.codigo)
.then((arreglo) => arreglo.map((x)=>x.precio))
.then((arreglo) => Math.min(...arreglo)/10000)

//.then((arreglo) => arreglo.filter((x)=>x.precio<=Math.min(...x.precio)))
.then((arreglo)=>console.log(arreglo))
.catch(e => console.log(e));
  
}


//const API_AH =`https://us.api.blizzard.com/data/wow/connected-realm/86/auctions?namespace=dynamic-us&locale=en_US&access_token=${ACCESS_TOKEN}`;

fetch(`${API_AH}`)
  .then((response) => response.json())
  .then((ah) => {

   //console.log(ah)
    
    
    

  })

  function buscar2(item) {
    let ItemPrices= [item.materiales];
    return ItemPrices;
  }

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

      let ul2 = document.createElement("ul");
      let elem = document.createElement("li");
      

      elem.appendChild(document.createTextNode(`${we.name}`));

      ul.appendChild(elem);
      elem.appendChild(ul2);
     
        we.recipes.forEach((r) => {
        
        
        let ul3 = document.createElement("ul");
        let elem2 = document.createElement("li");
        
       

        const API_URL_ITEMS = `https://us.api.blizzard.com/data/wow/recipe/${r.id}?namespace=static-us&locale=es_ES&access_token=${ACCESS_TOKEN}`;

        fetch(`${API_URL_ITEMS}`)
          .then((response) => response.json())
          .then((item) => {
            let unico = item.reagents;
            let another = unico.map((x)=>x.reagent);
            let material_id = another.map((x)=>x.id);
            let cantidad = unico.map((x)=>x.quantity);
            let craft=[]
            unico.forEach((i)=>{
              craft.push({cant:i.quantity, id_item:i.reagent.id, name:i.reagent.name})
            })
             let ItemPrices= {item:item.crafted_item, materiales:craft};
             return ItemPrices;            
            })           
            .then((item) =>   
              {              
                  buscaPokemon()
                  .then((arreglo) => arreglo.map(buscar))
                  .then((arreglo) => arreglo.filter((x)=>x.codigo==item.item.id ))
                  .then((arreglo) => {

                    if (arreglo.length === 0  )
                    return [10];
                    else
                    return arreglo;
                  })                
                  .then((arreglo) => arreglo.map((x)=>x.precio))                
                  
                  .then((arreglo) => {

                    if (!isNaN(Math.min(...arreglo)/10000))
                    return Math.min(...arreglo)/10000;
                    else
                    return 'NO CUMPLE'
                  
                  })         
                  
                  .then((arreglo)=>  {
                    
                    elem2.appendChild(document.createTextNode(`${r.name} = ${arreglo}`))
                    ul2.appendChild(elem2);
                    return arreglo;
                  
                  }).then((arreglo)=>  {
                    
                    elem2.appendChild(ul3);
                  
                  })                   
                  .catch(e => console.log(e));
                  
    
                  return item;

              })
          
            .then((item)=> {
              
              item.materiales.forEach((i)=>{ 

                let elem3 = document.createElement("li");
                buscaPokemon()
                .then((arreglo) => arreglo.map(buscar))
                .then((arreglo) => arreglo.filter((x)=>x.codigo==i.id_item ))
                .then((arreglo) => {

                  if (arreglo.length === 0  )
                  return [10];
                  else
                  return arreglo;
                })                
                .then((arreglo) => arreglo.map((x)=>x.precio))                
                
                .then((arreglo) => {

                  if (!isNaN(Math.min(...arreglo)/10000))
                  return Math.min(...arreglo)/10000;
                  else
                  return 'NO CUMPLE'
                
                })
                .then((arreglo) => {
                  
                  elem3.appendChild(document.createTextNode(`${i.name} X ${i.cant} = ${arreglo}// total ${arreglo * i.cant}`));
            
                  ul3.appendChild(elem3);
                })    

                           


                


                return i;

                

              })


            })  

          
  
         
          
        
      });
    });
    
   
    
    HTMLResponse.appendChild(ul);
    //HTMLResponse.appendChild(ul2);

  });

  