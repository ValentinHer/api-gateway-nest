import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login.dto';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy ) {}

  @Post('register')
  async userRegister(@Body() registerUserDto: RegisterUserDto) {
    try {
      const result = await firstValueFrom(this.client.send({cdm: 'user_register'}, RegisterUserDto));
      return result;
    } catch (error) {
      return error;
    }
  }

  @Post('login')
  async userLogin(@Body() loginDto: LoginDto) {
    try {
      const result = await firstValueFrom(this.client.send({cmd: 'user_login'}, loginDto));
      return result;
    } catch (error) {
      return error;
    }
  }
}
