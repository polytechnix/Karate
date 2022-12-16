import { fighter } from './fighter.js';

export class Player1 extends Fighter {
	constructor(name, x, y, velocity) {
		super('Player1', x, y, velocity);

		this.image = document.querySelector('#player1');

		this.frames = new Map([
			['forwards-1', [8, 872, 53, 83], [27, 81]],
			['forwards-2', [70, 867, 60, 88], [35, 86]],
			['forwards-3', [140, 866, 64, 90], [35, 87]],
			['forwards-4', [215, 865, 63, 89], [29, 88]],
			['forwards-5', [288, 866, 54, 89], [25, 87]],
			['forwards-6', [357, 867, 50, 89], [25, 86]],
		]);
	}
}