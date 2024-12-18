import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { PROCESS, PROCESSOR } from 'src/domain/enums/processors.enum';
import { User } from '../../../domain/interface/interface.user';
import { CreateUserDto } from '../../../infra/http/dto/create-user.dto';
const users: User[] = [];
let userIdCounter = 1;
@Injectable()
export class UserService {
  constructor(@InjectQueue(PROCESSOR.USER_QUEUE) private userQueue: Queue) {}
  async addUserToQueue(createUserDto: CreateUserDto) {
    await this.userQueue.add(PROCESS.CREATE_USER, createUserDto);
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
