import 'dotenv/config';
import Queue from './lib/queue';

console.log('Queue Rodando...');
Queue.processQueue();
