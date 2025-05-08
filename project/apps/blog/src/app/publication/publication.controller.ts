import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';

import { CreatePostDto } from './dto/create-post.dto';
import { PostRdo } from './rdo/post.rdo';
import { CommentRdo } from './rdo/comment.rdo';
import {fillDto} from '@project/shared/helpers';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('publications')
@Controller('publications')
export class PublicationController {
  constructor(
    private readonly publicService: PublicationService,
   
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new post has been successfully created.'
  })
  
  @Post()
   public async create(@Body() dto: CreatePostDto) {    
    const newPost = await this.publicService.register(dto);
    return fillDto(PostRdo, newPost.toPOJO());
   }

   @ApiResponse({
    type: PostRdo,
    status: HttpStatus.OK,
    description: 'Post found'
  })
   @Get(':id')
   public async show(@Param('id') id: string) {
     const existPost= await this.publicService.getPost(id);
     return fillDto(PostRdo, existPost.toPOJO());
   }

   @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'Comment created'
  })
   @Post(':id/comments')
   public async createComment(@Body() dto: CreateCommentDto) {
    console.log(dto);
     const newComment = await this.publicService.createComment(dto);
     return fillDto(CommentRdo, newComment.toPOJO());
   }

   @Get(':id/comments')
   public async index(@Param('id') id: string) {
     const comments= await this.publicService.getComments(id);
     console.log(comments)
     return comments.map((it) => fillDto(CommentRdo, it.toPOJO()));
   }
}
