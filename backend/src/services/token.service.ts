import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()

@Injectable()
export class TokenService implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: Error | any) => void) {
        const token = req.headers['authorization']?.split(' ')[1]

        if(!token){
          res.redirect('http://localhost:5173/')
        }

        try {
            const decoded: any = jwt.verify(token, process.env.SECRET)
            req["key"] = {
                userid: decoded.userid,
                googleId: decoded.googleId
            }
            next()
        } catch {
            res.redirect('http://localhost:5173/')
        }
    }
}