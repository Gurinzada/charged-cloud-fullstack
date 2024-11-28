import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma.module";
import CompanyController from "src/controllers/company.controller";
import CompanyService from "src/services/company.service";



@Module({
    imports:[PrismaModule],
    controllers:[CompanyController],
    providers: [CompanyService]
})
export default class CompanieModule{}