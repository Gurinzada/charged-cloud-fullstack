import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(profile: any) {
    const { id, displayName, emails, photos } = profile;
    const email = emails[0]?.value;
    const photoUrl = photos[0].value;

    let user = await this.prisma.user.findUnique({
      where: {
        googleId: id,
      },
    });

    if (!user) {
      // Cria um novo usuário se não existir
      user = await this.prisma.user.create({
        data: {
          googleId: id,
          firstName: displayName,
          picture: photoUrl,
          email,
        },
      });
    }

    return user;
  }
}
