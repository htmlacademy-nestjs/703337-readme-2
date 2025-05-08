import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { PostModule } from '../post/post.module';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [PostModule, CommentModule],
  controllers: [PublicationController],
  providers: [PublicationService],
  exports:[PublicationService],
})
export class PublicationModule {}
