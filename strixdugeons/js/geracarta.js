/* esta rotina deve gerar randomicamente 07 cartas de forma aleatoria e colocar na mão do jogador
 */
/*
https://api.scryfall.com/cards/dom/2/pt
*/

const urlapirandomica = "https://api.scryfall.com/cards/random";
const urlbase = "https://api.scryfall.com/cards/"

// let searchPokemon = 1;
// let mtg=386616;
function getcard(url,n) {
 const sorteio = fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      gettraduzida(data.set,data.collector_number,n);
  
      }
      
      )
  
}
function gettraduzida(s,m,n){
  let urlpt = urlbase+s+'/'+m+'/pt';  
  alert(urlpt);
  const sorteio = fetch(`${urlpt}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('o'+n).src=data.image_uris.png;
      document.getElementById('c'+n).src=data.image_uris.small;
      getpexels;
  
      }
      
      )
  
}

function getpexels(){
  var pos = Math.floor(Math.random() * 15);
 

  var getpx = fetch('https://api.pexels.com/v1/curated', {
   method: 'GET',
   headers: {'Authorization':'aHxLL1lkSTzsZmbIwAaf2a5ad84fsOswkifgE4wKmyZXNStxNrXJX0lp'}})
    .then(response => response.json())
    .then(data =>{
      var urlcompos = data.photos[pos].src.large;
      document.getElementById('playmat').style.backgroundImage='url('+urlcompos+')';

    })
    
}




 function getcartneo(url,i){
  const sorte = fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('o'+i).src=data.image_uris.png;
      document.getElementById('c'+i).src=data.image_uris.small;
  
      }
      
      )
 } 

 function drawneo(url){
  const sorte = fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      var urlcompos = data.image_uris.small;
      document.getElementById('draw').src=urlcompos;
      document.getElementById('draw').style.visibility='visible';
      
  
      }
      
      )
 } 



botaoiniciar.addEventListener('click', () => {
  for (i = 1; i < 8; i++) {
    var moeda = parseInt(Math.random() * 1)
    var land = 283+ parseInt(Math.random() * 11)
    var nx = parseInt(Math.random() * 294)+1;
    if (moeda =0) {
      nx = land;
  
   }
    let urlneo = urlbase+'neo/'+nx+'/pt';
    getcartneo(urlneo,i);

  }
  

  })


botaopexel.addEventListener('click', () => {
    getpexels()})



comprar1.addEventListener('click', () => {
        var moeda = Math.random() * 1;
        var land = 283+ parseInt(Math.random() * 11)
        var nx = parseInt(Math.random() * 294)+1;
        if (moeda > 0.40) {
          nx = land;      
       }
        let urlneo = urlbase+'neo/'+nx+'/pt';
        drawneo(urlneo,i);
    
      })
