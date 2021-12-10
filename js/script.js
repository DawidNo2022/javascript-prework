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
printMessage('MOj ruch to ' + computerMove);