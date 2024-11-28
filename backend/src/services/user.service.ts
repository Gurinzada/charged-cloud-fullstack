import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";


type user = {
    email:string
    firstName:string,
    picture:string,
}

@Injectable()
export default class UserService{
    constructor(private readonly prisma: PrismaService){}

    async getUser(googleId:string, id:number):Promise<user | null>{
        try {
            const response = await this.prisma.user.findFirst({
                where:{
                    AND:[
                        {
                            id:id
                        },
                        {
                            googleId:googleId
                        }
                    ]
                }
            })
            if(response){
                return response
            }
        } catch {
            throw new Error("User Not found!")
        }
    }

    async getUserInfo(id:number): Promise<user | null>{
        try {
            const response =  await this.prisma.user.findUnique({
                where:{
                    id
                }
            })
            return {email: response.email, firstName: response.firstName, picture: response.picture}
        } catch {
            throw new Error('User Not found!')
        }
    }

    async logout(id:number):Promise<object | null>{
        try {
            const response = await this.prisma.user.findUnique({
                where:{
                    id
                }
            })
            if(response){
                return {logout:true}
            }
        } catch {
            throw new Error('Not possible to make logout')
        }
    }

}