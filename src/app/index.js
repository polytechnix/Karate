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
		window.requestAnimationFrame(frame);
	}

	window.requestAnimationFrame(frame);
}
