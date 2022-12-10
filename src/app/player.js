const player = document.querySelector('.player');

const position = {
	x: GameViewport.WIDTH / 2 - player.width / 2,
	y: 120 
};

let velocity = 1;

function updatePlayer() {
	position.x += velocity;
			
	if(position.x > canvasSection.width || position.x > 0) {
		velocity = -velocity;
	}
}

function drawPlayer() {
	canvasContext.drawImage(player, position.x, position.y);
}