import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import UserService from 'src/services/user.service';

@Controller('/users/')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Post('validate')
  async validateUser(@Req() req: Request, @Res() res: Response) {
    try {
      const googleId = req['key'].googleId;
      const id = req['key'].userid;

      const user = await this.userService.getUser(googleId, Number(id));
      if (user) {
        return res.json({ userChecked: true });
      }

      return res
        .status(404)
        .json({ userChecked: false, message: 'User not found' });
    } catch (error) {
      return res.status(500).json({ userChecked: false, message: error });
    }
  }

  @HttpCode(200)
  @Get('info')
  async getUserInfos(@Req() req: Request, @Res() res: Response) {
    try {
      const id = req['key'].userid;

      const userInfo = await this.userService.getUserInfo(Number(id));

      if (userInfo) {
        return res.json(userInfo);
      }

      return res.status(404).json({ message: 'User not found' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  @HttpCode(200)
  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    try {
      const id = req['key'].userid;

      const result = await this.userService.logout(Number(id));

      if (result) {
        return res.json(result);
      }

      return res
        .status(404)
        .json({ message: 'User not found or already logged out' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
