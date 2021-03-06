{
  const playGame = function(playerInput){

    clearMessages();

    const getMoveName =function(argMoveId){
      
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    const displayResult = function(argComputerMove, argPlayerMove){

      console.log('moves:', argComputerMove, argPlayerMove);

      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        console.log('wygrana01')
        printMessage('Ty wygrywasz!');
      } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        console.log('wygrana02')
        printMessage('Ty wygrywasz!');
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        console.log('wygrana03')
        printMessage('Ty wygrywasz!');
      } else if(argComputerMove == argPlayerMove){
        console.log('remis')
        printMessage('Remis!');
      } else{
        console.log('przegrana')
        printMessage('Przegrana!');
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);

    /*
    if(randomNumber == 1){
      computerMove = 'kamień';
    } else if(randomNumber == 2){
      computerMove = 'papier';
    } else if(randomNumber == 3){
      computerMove = 'nożyce';
    }
    */

    printMessage('Mój ruch to: ' + computerMove);

    /*
      let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    */
  
      console.log('Gracz wpisał: ' + playerInput);

      /*
      if(playerInput == '1'){
        playerMove = 'kamień';
      } else if(playerInput == '2'){
        playerMove = 'papier';
      } else if(playerInput == '3'){
        playerMove = 'nożyce';
      }
      */

      printMessage('Twój ruch to: ' + playerMove);

      displayResult(computerMove, playerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}
