import { Post } from './post.interface';

export interface Reference extends Post{
  link: string;
  description: string;
  tags?: string[];
}
