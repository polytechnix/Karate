export class Fighter = {
	constructor(name, x, y, velocity) {
		this.name = name;
		this.image = Image();
		this.position = { x, y };
		this.velocity = velocity;

		update(secondsPassed, canvasContext) {
			this.position.x += this.velocity * secondsPassed;
			
			if(this.position.x > canvasSection.canvas.width - this.image.width || this.position.x > 0) {
				this.velocity = -this.velocity;
			}
		}

		draw(canvasContext) {
			canvasContext.drawImage(this.image, this.position.x, this.position.y);
		}
	}
}

