import http from 'http';
import { app, initializeSocket } from './app';

const server = http.createServer(app);
const PORT = 3000;

initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});