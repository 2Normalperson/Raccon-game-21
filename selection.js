let playerStats = [100, 100, 10, 4,]
let enemyStats = ["Goomba", 50, 5, 3];
let playerScreen = document.querySelector(".player_screen");
let enemyScreen = document.querySelector(".enemy_screen");
let body = document.querySelector("body");
let currentEnemyHealth = document.querySelector(".enemyHealth");
let player_healthBar = document.querySelector(".p_health_bar");
let options = document.querySelector(".options");
let textBox = document.querySelector(".text_box");
let healOptions = document.querySelector(".heal");
let victory = document.querySelector(".victory_screen");
let gameOver = document.querySelector(".game_over_screen");
let critTF = false;
let bread = [5, 20];


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function enemyGetRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function playerTurn() {
  textBox.innerHTML = "";
  healOptions.style.display = "none";
  player_healthBar.style.display = "block";
  player_healthBar.style.display = "flex";
  player_healthBar.innerHTML = "" + playerStats[1] + "/100 HP";
  options.style.display = "block";
  options.style.display = "flex";
}

function attackButton() {
  player_healthBar.style.display = "none";
  options.style.display = "none";
  textBox.innerHTML = "You attacked the " + enemyStats[0];
  let attackPower = getRndInteger(playerStats[2], 20);
  let crit = getRndInteger(1, 100);
  if (crit > 90) {
    attackPower = attackPower + 10;
    critTF = true;
  } else {
    critTF = false;
  }
  attackPower = attackPower - enemyStats[3];
  setTimeout(() => {
    if (critTF == true) {
      console.log("it works");
      textBox.innerHTML = "CRITICAL HIT. The " + enemyStats[0] + " suffered " + attackPower + " damage";
      enemyStats[1] = enemyStats[1] - attackPower;
    } else {
    console.log("it works 3")
    textBox.innerHTML = "The " + enemyStats[0] + " suffered " + attackPower + " damage";
    enemyStats[1] = enemyStats[1] - attackPower;
    }
    if (enemyStats[1] <= 0) {
      enemyStats[1] = 0;
      currentEnemyHealth.innerHTML = "0/50"
      setTimeout(() => {
        Victory();
      }, 2000);
    }
    currentEnemyHealth.innerHTML = "" + enemyStats[1] + "/50";
    setTimeout(() => {
      enemyTurn()
    }, 2000);
  }, 2000);

}

function healButton() {
  options.style.display = "none";
  healOptions.style.display = "block";
  healOptions.style.display = "flex";
}

function runButton() {
  player_healthBar.style.display = "none";
  options.style.display = "none";
  textBox.innerHTML = "You try to run";
  setTimeout(() => {
    textBox.innerHTML = "The " + enemyStats[0] + " stops you";
    setTimeout(() => {
      enemyTurn();
    }, 2000);
  }, 2000);
}

function enemyTurn() {
  player_healthBar.innerHTML = "";
  textBox.innerHTML = "The " + enemyStats[0] + " attacked you";
  let enemyAttackPower = enemyGetRndInteger(enemyStats[2], 15);
  enemyAttackPower = enemyAttackPower - playerStats[3];
  if (enemyAttackPower <= 0) {
    enemyAttackPower = 1;
  }
  setTimeout(() => {
    textBox.innerHTML = "You suffered " + enemyAttackPower + " damage";
    playerStats[1] = playerStats[1] - enemyAttackPower;
    if (playerStats[1] === 0) {
      setTimeout(() => {
        GameOver();
      }, 2000);
    }
    setTimeout(() => {
      playerTurn()
    }, 2000);
  }, 2000);
}

function breadOption() {
  healOptions.style.display = "none";
  textBox.innerHTML = "You take out the bread and eat it"
  setTimeout(() => {
    if (playerStats[1] === playerStats[0]) {
      textBox.innerHTML = "You already have full HP why are you healing?";
      setTimeout(() => {
        enemyTurn();
      }, 2000);
    } else {
      playerStats[1] = playerStats[1] + bread[1];
      let recovered = bread[1];
      if (playerStats[1] > playerStats[0]) {
        let h = playerStats[1] - playerStats[0];
        playerStats[1] = playerStats[1] - h;
        recovered = bread[1] - h;
      }
      player_healthBar.innerHTML = "" + playerStats[1] + "/100 HP"
      textBox.innerHTML = "Your recovered " + recovered + " HP";
      setTimeout(() => {
        enemyTurn();
      }, 2000);
    }
  }, 2000);
}

function Victory() {
  enemyScreen.style.display = "none";
  playerScreen.style.display = "none";
  document.body.style.backgroundImage = "url('https://c1.alamy.com/thumbs/2bw103b/pixel-art-8-bit-you-win-text-with-winner-golden-cup-on-black-background-isolated-vector-illustration-2bw103b.jpg')";
}

function GameOver() {
  enemyScreen.style.display = "none";
  playerScreen.style.display = "none";
}