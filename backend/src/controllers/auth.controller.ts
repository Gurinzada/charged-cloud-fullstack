import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()

@Controller('/auth/')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // Redireciona para o Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleCallback(@Req() req, @Res() res:Response) {
    // Retorna o usuário autenticado
    const googleId = req.user.googleId

    const token = jwt.sign({googleId, userid: req.user.id }, process.env.SECRET, {expiresIn: 86400})

    res.redirect(`http://localhost:5173/loading?userid=${token}`)
  }
}
