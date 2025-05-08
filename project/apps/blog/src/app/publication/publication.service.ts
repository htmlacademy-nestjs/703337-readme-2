import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../comment/comment.repository';
import { PostRepository } from '../post/post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostEntity } from '../post/post.entity';
import { CommentEntity } from '../comment/comment.entity';

@Injectable()
export class PublicationService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly commentRepository: CommentRepository
  ) {}

  public async register(dto: CreatePostDto) {
    const {blogUser, type, blogId, date, repost, published, likes, comments} = dto;
    const postEntity = new PostEntity(dto)
      
    return this.postRepository
      .save(postEntity);
  }

  public async getPost(id: string) {
    return this.postRepository.findById(id);
  }

  public async createComment(dto: CreateCommentDto) {
    const {date, user, text, postId} = dto;
    const commentEntity = new CommentEntity(dto)
      
    return this.commentRepository
      .save(commentEntity);
  }

  public async getComments(id: string) {
    return this.commentRepository.findByPostId(id);
  }
}
