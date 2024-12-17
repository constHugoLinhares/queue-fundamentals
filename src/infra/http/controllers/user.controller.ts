import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/application/use-cases/user/user-service.use-case';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() user: CreateUserDto, @Res() response: Response) {
    console.log('a');
    await this.userService.addUserToQueue(user);

    return response.status(201).json({ message: 'User created successfully' });
  }
}
