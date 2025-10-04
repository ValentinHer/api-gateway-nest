import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { firstValueFrom } from 'rxjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
    constructor(@Inject('USER_SERVICE') private client: ClientProxy ){}

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        try {
            const result = await firstValueFrom(this.client.send({cmd: 'create_user'}, user));
            return result;
        } catch (error) {
            return error;
        }
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        try {
            const result = await firstValueFrom(this.client.send({cmd: 'get_user_by_id'}, id));
            return result;
        } catch (error) {
            return error;
        }
    }

    @Get()
    async getAllUsers() {
        try {
            const result = await firstValueFrom(this.client.send({cmd: "get_all_users"}, {}));
            return result;
        } catch (error) {
            return error;
        }
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto ) {
        try {
            const result = await firstValueFrom(this.client.send({cmd: "update_user"}, {id, data: user}));
            return result;
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        try {
            const result = await firstValueFrom(this.client.send({cmd: "delete_user"}, id));
            return result;
        } catch (error) {
            return error;
        }
    }
}
