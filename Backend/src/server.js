import app from './app';

const Port = 3333;

app.server.listen(Port, () => {
    console.log(`Api rodando pela porta: ${Port}`);
});
