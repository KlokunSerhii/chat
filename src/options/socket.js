import io from 'socket.io-client';

export const socket = io.connect(
  'https://chat-back-end-6mf9.onrender.com'
);
