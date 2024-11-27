import { Module } from "@nestjs/common";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/services/auth.service";
import { GoogleStrategy } from "src/strategies/google.strategy";
import { PrismaModule } from "./prisma.module";

@Module({
    imports:[PrismaModule],
    controllers:[AuthController],
    providers: [GoogleStrategy, AuthService]

})

export default class AuthModule{}