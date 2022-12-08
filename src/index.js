const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224
};

window.onload = function() {
	// Constants
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.width = GameViewport.WIDTH;
	canvasSection.height = GameViewport.HEIGHT;

	const player = document.querySelector('img');

	const position = {
		x: 0,
		y: 0 
	};

	// Helpers
	canvasContext.strokeStyle = '#ac0202';

	canvasContext.moveTo(0, 0);
	canvasContext.lineTo(canvasSection.width, canvasSection.height);

	canvasContext.moveTo(canvasSection.width, 0);
	canvasContext.lineTo(0, canvasSection.height);

	canvasContext.stroke();

	function frame() {
		position.x++;
		canvasContext.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
	
		canvasContext.drawImage(player, 0, 0);
		window.requestAnimationFrame(frame);
	}

	window.requestAnimationFrame(frame);
}
