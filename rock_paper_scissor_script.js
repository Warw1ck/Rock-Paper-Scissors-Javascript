let score = JSON.parse(localStorage.getItem('score'))
if(!score){
  score = {
  win: 0,
  lose: 0,
  tie: 0
}}       
const scoreP = document.querySelector(".js-score")
scoreP.innerHTML = `Wins: ${score.win}, Lose ${score.lose}, Tie ${score.tie}!`

function computerMove(){
  const number = Math.random();
  if (number <= 0.3){
    return 'rock';
  } else if (number > 0.3 && number <= 0.6){
    return 'paper';
  }else{
    return 'scissors'
  }
}
function playGame(myChoice){
  const computer = computerMove();
  let result;
  if ((myChoice === 'rock' && computer === 'scissors') || (myChoice === 'paper' && computer === 'rock') || (myChoice === 'scissors' && computer === 'paper')){
    result = 'You win!';
    score.win +=1
  }else if(myChoice === computer){
    result = 'Tie!'
    score.tie +=1
  }else{
    result = 'You lose!'
    score.lose +=1
  }
  document.querySelector(".js-result").innerHTML = `${result}`
  document.querySelector(".js-moves").innerHTML =`You<img class='icon-result'src='images/${myChoice}.png'><img class='icon-result'src='images/${computer}.png'>Computer`
  localStorage.setItem('score', JSON.stringify(score))
  scoreP.innerHTML = `Wins: ${score.win}, Lose ${score.lose}, Tie ${score.tie}!`
}

function deleteScore(){
  score.win = 0
  score.lose = 0
  score.tie = 0
  localStorage.removeItem('score');
  scoreP.innerHTML = `Wins: ${score.win}, Lose ${score.lose}, Tie ${score.tie}!`
}


