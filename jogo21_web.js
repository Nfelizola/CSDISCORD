 //======================================== agora desafio JOGO 21 ======================
 //======================================== BLOCO DE VARIAVEIS GLOBAIS======================
 //========================================================================================
 let n1 =["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠"];
 let n2 =["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣"];
 let n3 =["A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"];
 let n4 =["A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦"];
 let baralho= n1.concat(n2,n3,n4);
 //let fimdejogo = false;
 let entrada = require('readline-sync');
 //console.log(baralho);
 //console.log(baralho.length);
 //console.log("shufflando o baralho pra modi joga TRANCA");
 baralho.sort(randOrd);
 baralho.sort(randOrd);
 baralho.sort(randOrd);
 //console.log(baralho);
 //* gerar a mao do jogador e a mao do bot
 // regra do 21 , 
 // 02 cartas para cada jogador, pergunta-se para o jogador 1 se ele quer mais carta, se ele quiser compra mais uma
 // o jogador 2 escolhe se vai comprar cartas também....
 // todo momento atento a soma de pontos na mão...

// APÓS PREPARAR VARIAVEIS SISTEMA DE SENHYA
let maobot= [baralho.shift(),baralho.shift()];
let maogamer= [baralho.shift(),baralho.shift()];
console.clear();
var readlineSync = require('readline-sync'),
  escolas = ["Sufix", "Platinopena", "Murcha-Flor","Quandriz","quandrix","Prismax", "Prismari","sapioforte"];
  index = readlineSync.keyInSelect(escolas, 'Qual a faculdade da Luiza no clube Strixhaven ?');
  if (index!=3) {
    console.log("Sorry, "+escolas[index]+" go oout, você não têm a senha para entrar no cassino");
  }else{
    console.clear();
    tela("primeiravez");
    var valor=0;
    var soma=0;
    maogamer.forEach(somarmao);
    let somag=soma;
    soma=0;
    maobot.forEach(somarmao);
    let somar=soma;
    soma=0;
    //console.log(somar+","+somag);
    while (somar<=17){
        console.log("Robo pegou mais carta(s)");
        maobot.push(baralho.shift());
        maobot.forEach(somarmao);
        somar=soma;
        soma=0;
      }
        console.log("Robo tá de boa " );
    var resp=0;
    while (resp!='N'){
        resp = entrada.question(" e vc quer  mais uma carta(S/N)?");
      if (resp=='S'){
        var proxima = baralho.shift();
        maogamer.push(proxima);
        console.log("sua carta foi : "+proxima);
      }
    }
    tela("fimdejogo");
    soma=0;
    maogamer.forEach(somarmao);
    let totg=soma;
    console.log("GAMER ==>"+ totg);
    soma=0;
    maobot.forEach(somarmao)
    let totr=soma;
    console.log("bot==>"+totr);
    if ((totg>totr)){
      console.log("Parabens vc ganhou")
    }else{
           console.log("o Bot levou esta")
      }
     
    


  }
    
    



 

function randOrd() {
    return (Math.round(Math.random())-0.5);
}
function tela(status) {
    console.clear();
    console.log("---------------------CASSINO ROYALE-----------------------")
    //1 passo criar as 02 maos e mostrar jogadores e suas 02 cartas
    console.log("🤖==>👐 ");
    if (status=="fimdejogo"){
        console.log(maobot);
    }else{
        console.log("[ '##', '##' ]")
        }
    console.log("================================");
    console.log("================================");
    console.log("================================");
    console.log("================================");
    console.log("😛==>👐 ");
    console.log(maogamer);
  
  }

function somarmao(item,index) {
    var caractere=item.slice(0,1);
    // EXTRAIR NAIPE DE CADA CARTA - VAMOS TRANSFORMAR EM FUNCAO PEGANAIPE() ??
    var naipe = item.substring((item.length-1),(item.length));
    //console.log(naipe);
    switch (caractere){
        case '1':
            valor=10;
            break;
        case 'A':
            valor =1;
            break;
        case 'J':
            valor =10;
            break;
        case 'Q':
             valor =10;
             break;
        case 'K':
             valor =10;
             break;
        default:
             valor = parseInt(item.slice(0,1));
             break;
    }
   soma=soma+valor;

}


