import { fighter } from './fighter.js';

export class Player2 extends Fighter {
	constructor(name, x, y, velocity) {
		super('Player2', x, y, velocity);

		this.image = document.querySelector('#player2');
	}
}