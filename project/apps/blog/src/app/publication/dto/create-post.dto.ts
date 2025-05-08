import {User, PostType} from '@project/shared/app/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {  
  public blogUser: User;

  @ApiProperty({
    description: 'Post type',
    example: 'photo',
  })
  public type: PostType;

  @ApiProperty({
    description: 'Post blog id',
    example: '3257sfjks',
  })
  public blogId: string;

  @ApiProperty({
    description: 'Post birth date',
    example: '1981-03-12',
  })
  public date: Date;

  @ApiProperty({
    description: 'Post flag repost',
    example: true
  })
  public repost: boolean;

  @ApiProperty({
    description: 'Post flag published',
    example: false
  })
  public published: boolean;

  @ApiProperty({
    description: 'Post account likes',
    example: 23
  })
  public likes: number;

  @ApiProperty({
    description: 'Post account comments',
    example: 2
  })
  public comments: number;

  @ApiProperty({
    description: 'Description post tags',
    example: ['#interface', '#api']
  })
  public tags?: string[];
}


