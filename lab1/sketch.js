let playerDefense;
let enemyAttack;
let score = 0;
let timeLeft = 3;
let gameActive = false;
let attackTypes = ['sword', 'spear', 'axe'];
let attackIcons = {
  sword: '⚔️',
  spear: '🗡️',
  axe: '🪓'
};

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  startGame();
}

function draw() {
  background(220);
  
  if (gameActive) {
    // Отображение информации о текущем состоянии игры
    textSize(32);
    text(`Счет: ${score}`, width / 2, height / 4);
    textSize(64);
    text(`Атака: ${attackIcons[enemyAttack]}`, width / 2, height / 2);
    textSize(32);
    text(`Осталось времени: ${timeLeft}`, width / 2, height * 3 / 4);
    
    // Обновление времени
    if (frameCount % 60 === 0 && timeLeft > 0) {
      timeLeft--;
    }
    
    if (timeLeft === 0) {
      endGame();
    }
  } else {
    textSize(32);
    text("Нажмите 'R' для начала", width / 2, height / 2);
  }
}

function keyPressed() {
  if (gameActive) {
    if (key === '1') {
      playerDefense = 'sword';
    } else if (key === '2') {
      playerDefense = 'spear';
    } else if (key === '3') {
      playerDefense = 'axe';
    }
    
    if (playerDefense) {
      checkDefense();
    }
  } else if (key === 'r' || key === 'R') {
    startGame();
  }
}

function startGame() {
  score = 0;
  timeLeft = 3;
  gameActive = true;
  nextAttack();
}

function nextAttack() {
  enemyAttack = random(attackTypes);
  timeLeft = 3; // Сброс времени
}

function checkDefense() {
  if (playerDefense === enemyAttack) {
    score++;
    nextAttack();
  } else {
    endGame();
  }
}

function endGame() {
  gameActive = false;
  textSize(32);
  text(`Игра окончена! Счет: ${score}`, width / 2, height / 2);
}
