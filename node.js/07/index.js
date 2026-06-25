const app = require('./src/app');

class Server {
    PORT = 3000;

    constructor() {
        app.listen(this.PORT, () => console.log(`🚀 Server is running on ${this.PORT} port`));
    }
}

new Server();