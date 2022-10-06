import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  readonly email: string;
  @ApiProperty({ example: '1234567890', description: 'Пароль' })
  readonly password: string;
}
