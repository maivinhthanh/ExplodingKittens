import { Socket, io } from 'socket.io-client';
import { socketUrl } from './lib/constants';

const URL: string = socketUrl;

export const socket: Socket = io(URL);