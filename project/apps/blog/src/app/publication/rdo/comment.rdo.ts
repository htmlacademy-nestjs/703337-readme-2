import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CommentRdo {
  
  @ApiProperty({
      description: 'Comment text',
      example: 'the best post!',
    })
  @Expose()
    public text: string;
  
  @ApiProperty({
    description: 'Post  id',
    example: '3257sfjks',
  })
  @Expose()
  public postId: string;
  
}
