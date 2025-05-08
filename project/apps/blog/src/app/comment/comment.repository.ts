import { BaseMemoryRepository } from '@project/shared/core';
import { CommentEntity } from './comment.entity';

export class CommentRepository extends BaseMemoryRepository<CommentEntity> {
  public findByPostId(id: string): Promise<CommentEntity[] | null> {
    const entities = Array.from(this.entities.values());
    //console.log(entities)
    const comments = entities.filter((entity) => entity.postId === id);
    //console.log(comments)
    return Promise.resolve(comments);
  }
}
