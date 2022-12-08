const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224
};

window.onload = function() {
	// Constants & Variables
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.width = GameViewport.WIDTH;
	canvasSection.height = GameViewport.HEIGHT;

	const [player, background] = document.querySelectorAll('img');

	const position = {
		x: GameViewport.WIDTH / 2 - player.width / 2,
		y: 120 
	};

	let velocity = 1;

	// Helpers
	function strokeSection() {
		canvasContext.strokeStyle = '#ac0202';
	
		canvasContext.moveTo(0, 0);
		canvasContext.lineTo(canvasSection.width, canvasSection.height);
	
		canvasContext.moveTo(canvasSection.width, 0);
		canvasContext.lineTo(0, canvasSection.height);
	
		canvasContext.stroke();
	}

	function frame() {
		position.x += velocity;
		
		if(position.x > canvasSection.width || position.x > 0) {
			velocity = -velocity;
		}

		// canvasContext.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
		strokeSection();
	
		canvasContext.drawImage(player, 0, 0);
		canvasContext.drawImage(background, 0, 0);

		window.requestAnimationFrame(frame);
	}

	window.requestAnimationFrame(frame);
}
