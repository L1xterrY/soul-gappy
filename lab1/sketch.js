class Monster {
    constructor(s) {
        this.x = width;
        this.y = height / 2;
        this.speed = s;
    }

    move() {
        this.x -= this.speed;

        if (this.x < 20) {
            if (abs(this.y - mouseY) > 10) {
                rocket.lifes -= 1;
            }

            this.reset();
        }
    }

    draw() {
        text('👾', this.x, this.y);
    }

    reset() {
        this.x = width;
        this.y = random(0, height);
        this.speed += 1;
    }
}

class Rocket {
    constructor() {
        this.x = 20;
        this.lifes = 3;
    }

    draw() {
        text('🚀', this.x, mouseY);
    }
}

let monster;
let monster2;
let rocket;

function setup() {
    createCanvas(400, 400);

    monster = new Monster(2);
    monster2 = new Monster(3);
    rocket = new Rocket();
}

function draw() {
    background(220);

    rocket.draw();

    if (rocket.lifes == 0) {

        text('game over', 100, 200);

    } else {

        monster.move();
        monster2.move();
        monster.draw();
        monster2.draw();

        text('❤️' + rocket.lifes, 10, 40);
    }
}