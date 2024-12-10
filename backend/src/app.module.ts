import { Module } from '@nestjs/common';
import AuthModule from './modules/auth.module';
import UserModule from './modules/user.module';
import CompanyModule from './modules/company.module';

@Module({
  imports: [AuthModule, UserModule, CompanyModule],
})
export class AppModule {}
