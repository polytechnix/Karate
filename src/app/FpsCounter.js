export class FpsCounter {
	constructor() {
		this.fps = 0;
	}

	update(time) {
		this.fps = Math.trunc(1 / time.secondsPassed);
	}

	draw(canvasContext) {
		canvasContext.font = 'bold 24px Arial';
		canvasContext.fillStyle = 'black';
		canvasContext.tetxAlign = 'center';
		canvasContext.fillText(`FPS: ${this.fps}`, canvasContext.canvas.width / 2, 30);
	}
}