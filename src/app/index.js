import { Stage } from './core/Stage.js';
import { Player1 } from './core/Player1.js';
import { Player2 } from './core/Player2.js';
import { Player2 } from './FpsCounter.js';

const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224
};

window.addEventListener('load', function() {
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.width = GameViewport.WIDTH;
	canvasSection.height = GameViewport.HEIGHT;

	const createEntities = [
		new Stage(),
		new Player1(80, 120, 180),
		new Player1(80, 120, -180),
		new FpsCounter();
	];

	let frameTime = {
		let previousTime: 0,
		let secondsPassed: 0
	};

	function frame(time) {
		window.requestAnimationFrame(frame);

		frameTime = {
			secondsPassed: (time - frameTime.previousTime) / 1000,
			previousTime: time
		};

		for(const entity of createEntities) {
			entity.update(frameTime, canvasContext);
		}

		for(const entity of createEntities) {
			entity.draw(canvasContext);
		}
	}

	window.requestAnimationFrame(frame);
});
