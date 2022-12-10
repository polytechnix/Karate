import { drawBackground } from './stage.js';
import { drawPlayer1, updatePlayer1 } from './player1.js';
import { drawPlayer12, updatePlayer2 } from './player2.js';

const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224
};

window.onload = function() {
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.width = GameViewport.WIDTH;
	canvasSection.height = GameViewport.HEIGHT;

	function frame() {
		updatePlayer1(canvasContext);
		drawPlayer1(canvasContext);

		updatePlayer2(canvasContext);
		drawPlayer2(canvasContext);

		drawBackground(canvasContext);
		window.requestAnimationFrame(frame);
	}

	window.requestAnimationFrame(frame);
}
