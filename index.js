const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const resultElement = document.getElementById('result');
let homeCount = 0;
let awayCount = 0;


function updateHomeScore(increment) {
    homeCount+= increment
    homeScore.textContent = homeCount;
}
function updateAwayScore(increment) {
    awayCount += increment
    awayScore.textContent = awayCount;
}

function addOneHome() {
    updateHomeScore(1);
}
function addTwoHome() {
    updateHomeScore(2)
}
function addThreeHome() {
    updateHomeScore(3)
}

function addOneAway() {
    updateAwayScore(1);
}
function addTwoAway() {
    updateAwayScore(2)
}
function addThreeAway() {
    updateAwayScore(3)
}

function newGame() {
    homeCount = 0;
    awayCount = 0;
    homeScore.textContent = homeCount;
    awayScore.textContent = awayCount;

    awayScore.classList.remove('highlight');
    homeScore.classList.remove('highlight');
    resultElement.textContent = ""
    startCountdown(20, 'countdown'); //change it to match the startCountdown function call at the end of the script

}

function startCountdown(durationInSeconds, elementId) {
    const countdownElement = document.getElementById(elementId);
    let timeRemaining = durationInSeconds;
  
    function updateCountdown() {
      if (timeRemaining <= 0) {
        countdownElement.textContent = 'Game Over!';
        clearInterval(intervalId);
  
        if (homeCount > awayCount) {
          resultElement.textContent = 'Home Team Wins!';
          homeScore.classList.add('highlight');
        } else if (homeCount < awayCount) {
          resultElement.textContent = 'Away Team Wins!';
          awayScore.classList.add('highlight');
        } else {
          resultElement.textContent = 'It\'s a Tie!';
        }
      } else {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeRemaining--;
      }
    }
  
    updateCountdown(); 
    const intervalId = setInterval(updateCountdown, 1000);
  }
  
  startCountdown(20, 'countdown'); // change the 20 to more time if you want it to play longer
  