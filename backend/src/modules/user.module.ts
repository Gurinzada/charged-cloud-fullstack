import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import UserController from 'src/controllers/user.controller';
import { TokenService } from 'src/services/token.service';
import UserService from 'src/services/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenService)
      .forRoutes({ path: '/users/*', method: RequestMethod.ALL });
  }
}
