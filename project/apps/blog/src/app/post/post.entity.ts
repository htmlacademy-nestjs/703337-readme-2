import {Post, User, PostType} from '@project/shared/app/types';
import {Entity } from '@project/shared/core';

export class PostEntity implements Post, Entity<string> {
  public id?: string;
  public blogUser: User;
  public type: PostType;
  public blogId: string;
  public date: Date;
  public repost: boolean;
  public published: boolean;
  public likes: number;
  public comments: number;
  public tags?: string[];

  constructor(post: Post) {
    this.populate(post)
  }

  public toPOJO() {
    return {
      id: this.id,
      blogUser: this.blogUser,
      type: this.type,
      blogId: this.blogId,
      date: this.date,
      repost: this.repost,
      published: this.published,
      likes: this.likes,
      comments: this.comments,
    };
  }

  public populate(data: Post): void {    
    this.blogUser = data.blogUser;
    this.type = data.type;
    this.blogId = data.blogId;
    this.date = new Date;
    this.repost = data.repost;
    this.published = data.published;
    this.likes = data.likes;
    this.comments = data.comments;
  }
}
