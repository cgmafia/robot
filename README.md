# ROBOT GAME - written by Anand Venkataraman
This is a fun project where the user mentions the floor size, robot's initial position and the movement
The app calculates the movement like a real movement in the space and return the value of final position and direction, the robot if facing

## Requirments to run this app
Windows/Mac/Linux with commandline/terminal/bash shell
NodeJs v17+ installed
Git installed or any zip file extractor of your choice

## Instructions to install & play
- Clone the git repo using terminal or commandline with this command ``` git clone https://github.com/cgmafia/robot.git ``` or download as zip, then extract to a folder
- Open the terminal/commandline and run the following commands ``` npm install ```
- Once the process finishes, run ``` node index.js ```
- You should now see the text "Welcome to ROBOT"

## Instructions to play
- Run the ROBOT app
- It should prompt you for floorspace. You should type the space in width and depth with a space in between for example 5 5 and press Enter
- Then it will prompt you with robot's position. Obviously should type the position inside the floor space so choose any number within the width & depth and type it. For example 2 3 and press Enter
- Next is the most intereting part. You have to mention the directons it will move through. R = right, L - Left and F = move forward for example RFLFRFLF (right, forward, left... and so on)
- You shoud see the final position of the robot like 12 15 S. This is in width, depth and direction it is facing (N = North, S = South, E = East, W = West)
