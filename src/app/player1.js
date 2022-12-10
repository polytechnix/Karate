const player1 = document.querySelector('#player1');

const position = {
	x: 80,
	y: 120 
};

let velocity = 1;

export function updatePlayer1(canvasContext) {
	position.x += velocity;
			
	if(position.x > canvasSection.canvas.width - player1.width || position.x > 0) {
		velocity = -velocity;
	}
}

export function drawPlayer1(canvasContext) {
	canvasContext.drawImage(player1, position.x, position.y);
}