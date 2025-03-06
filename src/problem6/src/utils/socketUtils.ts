import { Server } from 'socket.io';

let io: Server;

export const initializeSocket = (httpServer: any) => {
  io = new Server(httpServer);

  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

export const emitScoreUpdate = (userId: string, newScore: number) => {
  io.emit('scoreUpdate', { userId, newScore });
};