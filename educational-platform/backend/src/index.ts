import { middleware } from './middleware';
import dotenv from 'dotenv';

dotenv.config();

class Server {
  private readonly PORT: number = parseInt(process.env.PORT || '3000', 10);

  constructor() {
    this.start();
  }

  private async start(): Promise<void> {
    try {
      await middleware.initializeDatabase();
      
      middleware.app.listen(this.PORT, () => {
        console.log(`🚀 Server is running on port ${this.PORT}`);
        console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`🔗 CORS origin: ${process.env.CORS_ORIGIN || 'http://localhost:5173'}`);
      });
    } catch (error) {
      console.error('❌ Failed to start server:', error);
      process.exit(1);
    }
  }
}

new Server();
