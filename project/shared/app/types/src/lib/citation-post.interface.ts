import { Post } from './post.interface';

export interface Citation extends Post{
  text: string;
  author: string;  
}
