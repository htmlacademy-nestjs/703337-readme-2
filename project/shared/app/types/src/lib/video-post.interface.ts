import { Post } from './post.interface';

export interface Video extends Post{
  name: string;
  reference: string;
}
