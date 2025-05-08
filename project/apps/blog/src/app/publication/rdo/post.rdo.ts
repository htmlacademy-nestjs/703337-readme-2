import { Expose } from 'class-transformer';
import {User, PostType} from '@project/shared/app/types';
import { ApiProperty } from '@nestjs/swagger';

export class PostRdo {
  @Expose()
    public blogUser: User;

  @ApiProperty({
      description: 'Post type',
      example: 'photo',
    })
  @Expose()
    public type: PostType;
  
  @ApiProperty({
    description: 'Post blog id',
    example: '3257sfjks',
  })
  @Expose()
    public blogId: string;
  
  @ApiProperty({
    description: 'Post birth date',
    example: '1981-03-12',
  })
  @Expose()
    public date: Date;
  
  @ApiProperty({
    description: 'Post flag repost',
    example: true
  })
  @Expose()
    public repost: boolean;
  
  @ApiProperty({
    description: 'Post flag published',
    example: false
  })
  @Expose()
    public published: boolean;
  
  @ApiProperty({
    description: 'Post account likes',
    example: 23
  })
  @Expose()
    public likes: number;
  
  @ApiProperty({
    description: 'Post account comments',
    example: 2
  })
  @Expose()
    public comments: number;
  
  @ApiProperty({
    description: 'Description post tags',
    example: ['#interface', '#api']
  })
  @Expose()
    public tags?: string[];
}
