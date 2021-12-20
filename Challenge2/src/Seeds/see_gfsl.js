import { createPlayer } from '../Services/player';
import { datatype } from 'faker';

const player = createPlayer(datatype.uuid());

export default player;