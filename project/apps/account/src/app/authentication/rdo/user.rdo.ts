import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @Expose()
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
    public id: string;

  @ApiProperty({
      description: 'User avatar path',
      example: '/images/user.png'
    })
  @Expose()
  public avatarUrl: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks'
  })
  @Expose()
  public name: string;

}
