import 'reflect-metadata';
import server from './server';

server.listen(process.env.PORT || 8000, '0.0.0.0', (err: Error) => {
  if (err) throw err;

  console.log(`server listening on ${process.env.PORT || 8000}`)
});
