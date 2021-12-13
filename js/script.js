//buutony 
const buttonRock=document.getElementById('button-rock');
const buttonPaper=document.getElementById('button-paper');
const buttonScissors=document.getElementById('button-scissors');

/**
 * Describe this function...
 */

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
/**
 * Describe this functi */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamien';
  } else if(argMoveId==2) {
      return 'papier'
  } else if (argMoveId==3){
      return 'nozyczki'
  }
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamien';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
 
  if (argPlayerMove == 'papier' && argComputerMove == 'kamien') {
    printMessage('Wygrywasz!');
  } 
  else if(argPlayerMove == 'kamien' && argComputerMove=='nozyczki'){
      printMessage('Wygrywasz')
  }
   else if(argPlayerMove == 'nozyczki' && argComputerMove=='papier'){
      printMessage('Wygrywasz')
  }
    else if(playerMove==computerMove){
      printMessage('Remis')
  }
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

let computerMove, 
playerMove=argButtonName, 
randomNumber= Math.floor(Math.random() * 3 + 1);
console.log('wybór ruchu gracza to: ' + playerMove);
console.log('ruch gracza to: ' + playerMove);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

}


buttonRock.addEventListener('click', function(){buttonClicked('kamien')});
buttonPaper.addEventListener('click', function(){buttonClicked('papier')});
buttonScissors.addEventListener('click', function(){buttonClicked('nozyczki')});
