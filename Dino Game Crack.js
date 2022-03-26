//This Function is for Dino not crash.
Runner.instance_.gameOver = function () { }

//This Function is for Dino Jump OR Duck.
function autoPlay() {

	setTimeout(function () {

		myinstance = this.Runner.instance_;
		myobstacles = myinstance.horizon.obstacles;

		if (myinstance.tRex.ducking) {
			myinstance.tRex.setDuck(true);
		}

		if (myobstacles.length > 0) {
			action = "JUMP";
			obstacle_type = myobstacles[0]["typeConfig"]["type"];

			if (obstacle_type == "CACTUS_SMALL") {
				action = "JUMP";
			}
			else if (obstacle_type == "CACTUS_LARGE") {
				action = "JUMP";
			}
			else if (obstacle_type == "PTERODACTYL") {
				if (myobstacles[0]["yPos"] == 75 || myobstacles[0]["yPos"] == 50) {
					action = "DUCK";
				}
			}

			if (myobstacles[0].xPos <= 115) {
				if (action == "JUMP") {
					curr_speed = myinstance.currentSpeed;
					myinstance.tRex.startJump(curr_speed);
				}
				else if (action == "DUCK") {
					myinstance.tRex.setDuck(true);
				}
			}
		}
		autoPlay();
	}, 50)
}
autoPlay();