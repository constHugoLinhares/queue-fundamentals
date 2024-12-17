import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateUserDto } from '../../../infra/http/dto/create-user.dto';
import { User } from '../../../interface/interface.user';
const users: User[] = [];
let userIdCounter = 1;
@Injectable()
export class UserService {
  constructor(@InjectQueue('user-queue') private userQueue: Queue) {}
  async addUserToQueue(createUserDto: CreateUserDto) {
    await this.userQueue.add('create-user', createUserDto);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUserId = userIdCounter++;
    const newUser = {
      id: newUserId,
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
    } as User;

    users.push(newUser);
    return newUser;
  }
}
