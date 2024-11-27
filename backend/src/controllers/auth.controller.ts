import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

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
    res.redirect(`http://localhost:5173/`)
  }
}
