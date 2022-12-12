export class FpsCounter {
	constructor() {
		this.fps = 0;
	}

	update(secondsPassed) {
		this.fps = Math.trunc(1 / secondsPassed);
	}

	draw(canvasContext) {
		canvasContext.font = 'bold 24px Arial';
		canvasContext.fillStyle = 'black';
		canvasContext.tetxAlign = 'center';
		canvasContext.fillText(`FPS: ${this.fps}`, canvasContext.canvas.width / 2, 30);
	}
}