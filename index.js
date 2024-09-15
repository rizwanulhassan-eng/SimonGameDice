var i=0;
var pressList=[];
var keyPress=true;
var pressed=[];

document.addEventListener("keydown",function(e){
      if(keyPress===true){
      document.querySelector(".start").textContent="level "+i;
      gamestart();
      }
      keyPress=false;
})

for(var im=0;im<8;im++){
document.querySelectorAll(".btn")[im].addEventListener("click",function(e){
      var idName=e.target.id;
      pressed.push(idName);
      console.log(pressed);
      
      winlose(pressed.length-1);
})
}
function winlose(element){
      if(pressed[element]===pressList[element]){
            if(pressed.length===pressList.length){
                  i++;
                  document.querySelector(".start").textContent="level "+i;
                  gamestart();
            }
      }
      else{
            document.querySelector(".start").textContent="you lose";
            newGame();
      }
}

function gamestart(){
      pressed=[];
      var number=Math.floor(Math.random()*8)+1;
      console.log(number);
      sequence="";
      switch (number) {
            case 1:
                  sequence="one";
                  break;
            case 2:
                  sequence="two";
                  break;
            case 3:
                  sequence="three";
                  break;
            case 4:
                  sequence="four";
                  break;
            case 5:
                  sequence="five";
                  break;
            case 6:
                  sequence="six";
                  break;
            case 7:
                  sequence="seven";
                  break;
            case 8:
                  sequence="eight";
                  break;
            default:
                  break;
      }
      pressList.push(sequence);
      console.log(sequence);
      var newsequence="."+sequence;
      document.querySelector(newsequence).classList.add("pressed");
      function greet() {
            document.querySelector(newsequence).classList.remove("pressed");
        }
        
        setTimeout(greet, 100);
}

function newGame(){
      i=0;
      pressList=[];
      keyPress=true;
      pressed=[];
      element=-1;
}