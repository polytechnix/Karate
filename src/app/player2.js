const player2 = document.querySelector('#player2');

const position = {
	x: 80,
	y: 120 
};

let velocity = -1;

export function updatePlayer2(canvasContext) {
	position.x += velocity;
			
	if(position.x > canvasSection.canvas.width - player2.width || position.x > 0) {
		velocity = -velocity;
	}
}

export function drawPlayer2(canvasContext) {
	canvasContext.drawImage(player2, position.x, position.y);
}