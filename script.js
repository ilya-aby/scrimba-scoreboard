let homeScore = 0;
let guestScore = 0;

function updateScore(points, team) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else {
        guestScore += points;
        document.getElementById('guest-score').textContent = guestScore;
    }
    highlightWinner();
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
    highlightWinner();
}

function highlightWinner() {
    const homeScoreElement = document.getElementById('home-score');
    const guestScoreElement = document.getElementById('guest-score');
    
    homeScoreElement.classList.remove('winning');
    guestScoreElement.classList.remove('winning');
    
    const homeScoreValue = parseInt(homeScoreElement.textContent);
    const guestScoreValue = parseInt(guestScoreElement.textContent);
    
    if (homeScoreValue > guestScoreValue) {
        homeScoreElement.classList.add('winning');
    } else if (guestScoreValue > homeScoreValue) {
        guestScoreElement.classList.add('winning');
    }
}
