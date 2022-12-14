export class Robotgame {
    poles = ['N', 'E', 'S', 'W'];
    robotInSpace = false;
    init_direction;
    robot_direction = this.poles.indexOf(this.init_direction);

    position_final = ""

    constructor(sizeX, sizeY, xPos, yPos, direction) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.xPos = xPos;
        this.yPos = yPos;
        this.init_direction = direction
        console.log(sizeX, sizeY, xPos, yPos, direction);
    }

    // utility
    proxy = new Proxy(this.poles, {
        get(target, prop) {

            if (!isNaN(prop)) {

                prop = parseInt(prop, 10);

                if (prop < 0) {
                    prop += target.length;
                } else if (prop > target.length) {
                    prop -= target.length;
                }

                return target[prop];
            }
        }
    });

    // Robot Movement Code
    robotTurnRight() {
        let n = this.poles.indexOf(this.robot_direction);
        n += 1;
        this.robot_direction = this.proxy[n];
        return this.robot_direction;
    }

    robotTurnLeft() {
        let n = this.poles.indexOf(this.robot_direction);
        n -= 1;
        this.robot_direction = this.proxy[n];
        return this.robot_direction;
    }

    
    robotInSpaceCheck() {
        if (this.xPos > this.sizeX ||
            this.yPos > this.sizeY ||
            this.xPos < 0 ||
            this.yPos < 0
        ) {
            this.position_final = "Robot has fallen on floor"
            return this.robotInSpace = true;
        }
    }


    robotMove(driveString) {
        // for each character in the string
        // turn on R/L
        // move on F and reflect in position X and Y
        this.movement = driveString.toUpperCase().split('');
        for (let m in this.movement) {
            if (this.robotInSpace == false) {
                if (this.movement[m] == 'R') {
                    this.robotTurnRight();
                } else if (this.movement[m] == 'L') {
                    this.robotTurnLeft();
                } else if (this.movement[m] == 'F') {
                    if (this.robot_direction == 'W') {
                        this.xPos++;
                    } else if (this.robot_direction == 'E') {
                        this.xPos--;
                    } else if (this.robot_direction == 'N') {
                        this.yPos++;
                    } else if (this.robot_direction == 'S') {
                        this.yPos--;
                    } else {
                        console.log("unkown direction");
                    }
                    this.robotInSpaceCheck();
                }
            } else {
                console.log("Robot has fallen on floor")
                break;
            }
            console.log(this.xPos, this.yPos, this.movement[m], m, this.robot_direction);
        }
    }


    play(value) {
        this.robotMove(value);
        if (this.robotInSpace = 'false') {
            this.position_final = this.xPos + ' ' + this.yPos + ' ' + this.robot_direction;
        }
        return this.position_final;
    }
}
