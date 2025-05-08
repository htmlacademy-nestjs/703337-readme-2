import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  public name: string;

  @ApiProperty({
    description: 'photo url',
    example: 'panina.png',
  })
  public avatarUrl: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;
}
