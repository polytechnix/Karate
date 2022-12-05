const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224,
	SCALE: 4
};

window.onload = function() {
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
	canvasSection.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;
}