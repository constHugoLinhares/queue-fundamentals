import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: 'O Email deve ser uma string',
  })
  email: string;
  @IsString({
    message: 'O nome deve ser uma string',
  })
  name: string;
  @IsString({
    message: 'A senha deve ser uma string',
  })
  password: string;
}
