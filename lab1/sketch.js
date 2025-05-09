let playerDefense;
let enemyAttack;
let score = 0;
let timeLeft = 3000; // Время на реакцию в миллисекундах
let gameActive = false;
let attackTypes = ['sword', 'spear', 'axe'];
let attackIcons = {
  sword: '⚔️',
  spear: '🗡️',
  axe: '🪓'
};
let lastAttackTime;

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
    text(`Осталось времени: ${Math.ceil((timeLeft - (millis() - lastAttackTime)) / 1000)}`, width / 2, height * 3 / 4);
    
    // Проверка времени
    if (millis() - lastAttackTime > timeLeft) {
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
  timeLeft = 3000; // Сброс времени на реакцию
  gameActive = true;
  nextAttack();
}

function nextAttack() {
  enemyAttack = random(attackTypes);
  lastAttackTime = millis(); // Запоминаем время последней атаки
}

function checkDefense() {
  if (playerDefense === enemyAttack) {
    score++;
    timeLeft = max(1000, timeLeft - 10); // Уменьшаем время на реакцию, но не меньше 1000 мс
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
