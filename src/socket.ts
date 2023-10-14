import { Socket, io } from 'socket.io-client';

const URL: string | undefined = 'http://localhost:4000';

export const socket: Socket = io(URL);