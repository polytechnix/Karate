import { fighter } from './fighter.js';

export class Player1 extends Fighter {
	constructor(name, x, y, velocity) {
		super('Player1', x, y, velocity);

		this.image = document.querySelector('#player1');
	}
}