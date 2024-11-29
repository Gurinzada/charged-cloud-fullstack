import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreateCompanyDTO } from "src/DTO/createcompany.dto";

type company = {
    address:string,
    category:string,
    cnpj:string,
    email:string,
    name:string,
    description:string | null,
    userid:number,
    website:string | null
    id:number
}

@Injectable()
export default class CompanyService{
    constructor(private readonly prisma:PrismaService){

    }
    async createCompany(companyInfos:CreateCompanyDTO, userid:number):Promise<company | null>{
        try {
            const response = await this.prisma.company.create({
                data:{
                    address: companyInfos.address,
                    category: companyInfos.category,
                    cnpj: companyInfos.cnpj,
                    email: companyInfos.email,
                    name: companyInfos.name,
                    description: companyInfos.description,
                    userid: userid,
                    website: companyInfos.website
                }
            })
            if(response){
                return response
            }
        } catch(error) {
            console.log(error)
            throw new Error ("Failed to create company")
        }
    }

    async getUserCompany(userid:number):Promise<company[] | null>{
        try {
            const response = await this.prisma.company.findMany({
                where:{
                    userid
                }
            })
            if(response){
                return response
            }
        } catch {
            throw new Error ("Failed to get companies")
        }
    }

    async getACompany(id:number, userid:number):Promise<company | null>{
        try {
            const response = await this.prisma.company.findFirst({
                where:{
                    AND:[
                        {
                            id
                        },
                        {
                            userid
                        }
                    ]
                }
            })
            if(response){
                return response
            }
        } catch {
            throw new Error ("Failed to get company")
        }
    }

    async updateACompany(id:number, companyInfos: CreateCompanyDTO):Promise<company | null>{
        try {
            const response = await this.prisma.company.update({
                where:{
                    id
                },
                data:{
                    address: companyInfos.address,
                    category: companyInfos.category,
                    cnpj: companyInfos.cnpj,
                    description: companyInfos.description,
                    email: companyInfos.email,
                    name: companyInfos.name,
                    website: companyInfos.website 
                }
            })
            if(response){
                return response
            }
        } catch {
            throw new Error ("Failed to update company")
        }
    }

    async deleteACompany(id:number){
        try {
            const response = await this.prisma.company.delete({
                where:{
                    id
                }
            })
            if(response){
                return {message: true}
            }
        } catch{
            throw new Error ("Failed to delete company")
        }
    }
}