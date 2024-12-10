import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import CompanyController from 'src/controllers/company.controller';
import CompanyService from 'src/services/company.service';
import { TokenService } from 'src/services/token.service';

@Module({
  imports: [PrismaModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export default class CompanyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenService)
      .forRoutes({ path: '/companies/*', method: RequestMethod.ALL });
  }
}
