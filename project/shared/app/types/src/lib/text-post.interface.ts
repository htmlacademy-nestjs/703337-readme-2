import { Post } from './post.interface';

export interface Text extends Post{
  name: string;
  preview: string;
  text: string;  
}
