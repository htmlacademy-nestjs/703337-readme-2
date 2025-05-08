import {User} from '@project/shared/app/types'

export class CreateCommentDto {  
  public date: Date;
  public user: User;
  public text: string;
  public postId: string;
}
