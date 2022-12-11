// run `node index.js` in the terminal
import { createInterface } from 'readline'
import {Robotgame} from './robot.js';


console.log(`Hello Node.js v${process.versions.node}!`);

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

const readLineAsync = msg => {
  return new Promise(resolve => {
    readline.question(msg, userRes => {
      resolve(userRes);
    });
  });
}

const startApp = async() => {
    console.log("\n Welcome to ROBOT \n")
    console.log("\n Welcome to ROBOT \n")
    let space = await readLineAsync("Type the floorspace (ex. 5 5): ");
    space = space.split(" ");

    let init_position = await readLineAsync("Type the robot position within floor space (ex. 2 3 N): ");
    init_position = init_position.split(" ")

    const movement = await readLineAsync("Type the robot movement (ex. RFRFFRFRF): ");

    if(parseInt(init_position[0]) > parseInt(space[0]) || parseInt(init_position[1]) > parseInt(space[1])){
        console.log("Robot is already outside the floor")
        readline.close();
        console.log(" — Thanks for playing !");
    } else {

        let game = new Robotgame(space[0], space[1], init_position[0], init_position[1], init_position[2]);
        let result = game.play(movement);
        
        
        readline.close();
        console.log("\n" + result);
        console.log(" — Thanks for playing ! — ");
    }
  }

  startApp();