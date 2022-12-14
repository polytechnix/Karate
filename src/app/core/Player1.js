import { fighter } from './fighter.js';

export class Player1 extends Fighter {
	constructor(name, x, y, velocity) {
		super('Player1', x, y, velocity);

		this.image = document.querySelector('#player1');

		this.frames = new Map([
			['forwards-1', [8, 872, 53, 83]],
			['forwards-2', [70, 867, 60, 88]],
			['forwards-3', [140, 866, 64, 90]],
			['forwards-4', [215, 865, 63, 89]],
			['forwards-5', [288, 866, 54, 89]],
			['forwards-6', [357, 867, 50, 89]],
		]);
	}
}