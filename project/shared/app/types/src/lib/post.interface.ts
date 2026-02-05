import { User } from './user.interface';

export enum PostType {
  Video = 'video',
  Text = 'text',
  Photo = 'photo',
  Citation = 'citation',
  Link = 'link',
}

export interface Post {
  blogUser: User;
  type: PostType;
  blogId: string;
  date: Date;
  repost: boolean;
  published: boolean;
  likes: number;
  comments: number;
  tags?: string[];
}

