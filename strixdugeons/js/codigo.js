 const urlapirandomica = "https://api.scryfall.com/cards/random";
 const urlbase = "https://api.scryfall.com/cards/random/"


/* este código deve se entendido assim, vc adicionou um Escutador
isto mesmo vc está escutando atrás da parede, e quando o evento
 "DOMContentLoaded" acontecer iremos 
 realizar o código que está em function
 Mas quando este evento acontece ? */
document.addEventListener("DOMContentLoaded", function(){
  var img1= document.getElementById("foto");
  alert("Ops, aconteci e foi um instante antes de exibir a página.. na imagem temos o SRC = "+ img1.getAttribute("src"));
  alert ("Bom então vou encontrar uma fonte para inicarmos");
  var errou=true;
  while (errou){
      var escolha = prompt("por gentileza escolha entre 1-STRIXHAVEN, 2-MAGIC ALEATÓRIO ou 3-MASMORRA");
      switch (escolha) {
        case '1':
          comimagens();
          errou=false;
          break;
        case '2':
          comgatherer();
          errou=false;
          break;
        case '3':
          commasmorra();
          errou=false;
          break;
        default:
          errou=true;
        break;
      }
   }   

});
 
/* agora quando o click em cima da imagem ocorrer eu detecto qual fase ou imagem esta na tela */
function cliqueimagem() {
  var fotoatual= document.getElementById("foto").getAttribute("src");
  /* capturando o atual ponto da masmorra */
  var fase = fotoatual.substring((fotoatual.length-6),fotoatual.length);
  console.log(fase);
  switch (fase) {
    case 'L0.png':
      alert("Vamos lá hoje veremos o primeiro nível da masmorra");
      fotoatual.setAttribute("src","./images/L1.png");
      break;
    case 'L1.png':
        alert("Vamos lá hoje veremos o primeiro nível da masmorra");
        break;
    
    default:
      break;
  }
  
  };



/* funçoes auxiliares dentro do mesmo .js */
function comimagens(){
 var ix=["i1.png","i2.png","i3.png","i4.png","i5.png"];
 var img1= document.getElementById("foto");
 img1.setAttribute("src","./images/"+ix[Math.round((Math.random() * 4))]);
 }

function comgatherer(){
/* estudar a  documentação do sdk da api 
  https://github.com/MagicTheGathering/mtg-sdk-javascript
  o sdk para o node apresentou erros, prefiro acessar direto o endpoint via fetch
  */
  
  const sorteio = fetch(`${urlbase}`)
     .then(response => response.json())
     .then(data => {
       console.log(data.set,data.collector_number);
       console.log(data.image_uris.normal);
       let img1= document.getElementById("foto");
       img1.setAttribute("src",data.image_uris.normal);
        }
       
       )
 
}
function commasmorra(){
  //var ix=["i1.png","i2.png","i3.png","i4.png","i5.png"];
  var img1= document.getElementById("foto");
  img1.setAttribute("src","./images/L0.png");
  }


 

