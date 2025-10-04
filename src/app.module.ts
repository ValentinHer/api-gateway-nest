import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "USER_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 4000
        }
      },
      {
        name: "ORDER_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 5000
        }
      }
    ])
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
