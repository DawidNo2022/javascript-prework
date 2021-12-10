var computerMove, randomNumber;
randomNumber=Math.floor(Math.random()*3+1);
console.log('wylosowana liczba to' + randomNumber);

if(randomNumber=='1'){
    computerMove='kamien';
} else if (randomNumber=='2') {
    computerMove='papier'
} else if (randomNumber='3') {
    computerMove='nozyczki';

}
printMessage('Moj ruch to ' + computerMove);
var playerMove, playerInput;
playerInput=prompt('Wybierz swoj ruch 1:kamien, 2:papier, 3:nozyczki');
console.log('Wybrany ruch to'+playerInput);
if(playerInput=='1'){
    playerMove='kamien';
}else if(playerInput=='2'){
    playerMove='papier';
} else if(playerInput=='3'){
    playerMove='nozyczki'
} else {
    printMessage('Niedozwolony ruch');
    playerMove='kamien';
}
printMessage('Twoj ruch to ' + playerMove)
