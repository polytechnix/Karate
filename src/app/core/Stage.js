export class Stage {
	constructor() {
		this.image = document.querySelector('.stage');
	}

	update() {
		//...
	}

	draw(canvasContext) {
		canvasContext.drawImage(this.image, 0, 0);
	}
}