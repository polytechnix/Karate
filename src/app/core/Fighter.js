export class Fighter = {
	constructor(name, x, y, velocity) {
		this.name = name;
		this.image = new Image();
		this.frame = new Map();
		this.position = { x, y };
		this.velocity = velocity;
		this.animationFrame = 1;
		this.animationTimer = 0;

		update(time, canvasContext) {
			const [, , width] = this.frames.get(`forwards-${this.animationFrame}`);

			if(time.previousTime > this.animationTimer + 60) {
				this.animationTimer = time.previousTime; 
				this.animationFrame++;
	
				if(this.animationFrame > 6) {
					this.animationFrame = 1;
				}
			}

			this.position.x += this.velocity * time.secondsPassed;
			
			if(this.position.x > canvasSection.canvas.width - width || this.position.x > 0) {
				this.velocity = -this.velocity;
			}
		}

		draw(canvasContext) {
			const [x, y, width, height] = this.frames.get(`forwards-${this.animationFrame}`);

			canvasContext.drawImage(this.image, x, y, width, height, this.position.x, this.position.y, width, height);
		}
	}
}

