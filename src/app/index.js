import { Stage } from './core/Stage.js';
import { Player1 } from './core/Player1.js';
import { Player2 } from './core/Player2.js';

const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224
};

window.onload = function() {
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.width = GameViewport.WIDTH;
	canvasSection.height = GameViewport.HEIGHT;

	const player1 = new Player1(80, 120, 180);
	const player1 = new Player1(80, 120, -180);
	const stage = new Stage();

	let previousTime = 0;
	let secondsPassed = 0;

	function frame(time) {

		secondsPassed = (time - previousTime) / 1000;
		previousTime = time;

		player1.update(secondsPassed, canvasContext);
		player1.draw(secondsPassed, canvasContext);

		player2.update(secondsPassed, canvasContext);
		player2.draw(secondsPassed, canvasContext);

		stage(canvasContext);
		window.requestAnimationFrame(frame);
	}

	window.requestAnimationFrame(frame);
}
