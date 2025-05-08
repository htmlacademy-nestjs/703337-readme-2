import {Entity } from '@project/shared/core';
import {Comment, User} from '@project/shared/app/types';

export class CommentEntity implements Comment, Entity<string> {
  public id?: string;
  public date: Date;
  public user: User;
  public text: string;
  public postId: string;

  constructor(comment: Comment) {
      this.populate(comment)
    }
  
    public toPOJO() {
      return {
        date: this.date,
        user: this.user,
        text: this.text,
        postId: this.postId,
      };
    }
  
    public populate(data: Comment): void {    
      
      this.date = new Date;
      this.user = data.user
      this.text = data.text;
      this.postId = data.postId;
    }
}

