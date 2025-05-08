import { User } from "./user.interface";
export interface Comment  {
  date: Date;
  user: User;
  text: string;
  postId: string;
}