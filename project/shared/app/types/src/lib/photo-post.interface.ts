import { Post } from './post.interface';

export interface Photo extends Post{
  photoPath: string;
}
