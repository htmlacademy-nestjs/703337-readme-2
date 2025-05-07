import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationController } from './authentication/authentication.controller';

@Module({
  imports: [AuthenticationModule, BlogUserModule],
  controllers: [AuthenticationController],
  providers: [],
})
export class AppModule {}
