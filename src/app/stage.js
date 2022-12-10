const background = document.querySelector('.stage');

export function drawBackground(canvasContext) {
	canvasContext.drawImage(background, 0, 0);
}