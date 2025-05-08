import { Module } from '@nestjs/common';
import { PublicationModule } from './publication/publication.module';
import { PostModule } from './post/post.module';
import { PublicationController } from './publication/publication.controller';

@Module({
  imports:[PublicationModule, PostModule],
  controllers:[PublicationController],
  providers:[]
})
export class AppModule {}
