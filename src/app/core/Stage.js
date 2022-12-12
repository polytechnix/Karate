export class Stage {
	constructor() {
		this.image = document.querySelector('.stage');
	}

	draw(canvasContext) {
		canvasContext.drawImage(this.image, 0, 0);
	}
}