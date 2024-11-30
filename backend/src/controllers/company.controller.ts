import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateCompanyDTO } from "src/DTO/createcompany.dto";
import CompanyService from "src/services/company.service";


@Controller('/companies')
export default class CompanyController{
    constructor(private readonly companyservice:CompanyService){}

    @HttpCode(201)
    @Post('/')
    async createCompany(@Body() company: CreateCompanyDTO, @Req() req:Request){
        try {
            const userid = Number(req['key'].userid)
            const response = await this.companyservice.createCompany(company,userid)
            if(response){
                return response
            } else{
                throw new HttpException("Company Failed to creation",
                    HttpStatus.CONFLICT)
            }

        } catch {
            throw new HttpException("Company Failed to creation",
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @HttpCode(200)
    @Get('/')
    async getCompanyUser(@Req() req: Request){
        try {
            const userid = Number(req['key'].userid)
            const response = await this.companyservice.getUserCompany(userid)

            if(response){
                return response
            }
        } catch {
            throw new HttpException("Companies failed to get",
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @HttpCode(200)
    @Get('/:id')
    async getACompany(@Param('id') id:number, @Req() req:Request){
        try {
            const userid = Number(req['key'].userid)
            const response = await this.companyservice.getACompany(Number(id), userid)
            if(response){
                return response
            }
        } catch {
            throw new HttpException("Company Failed to get",
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @HttpCode(200)
    @Patch('/:id')
    async updateACompany(@Param('id') id:number, @Body() company:CreateCompanyDTO){
        try {
            const response = await this.companyservice.updateACompany(Number(id), company)
            if(response){
                return response
            } else{
                throw new HttpException("Company Failed to update",
                    HttpStatus.CONFLICT)
            }
        } catch {
            throw new HttpException("Company Failed to update",
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @HttpCode(200)
    @Delete('/:id')
    async deleteACompany(@Param('id') id:number){
        try {
            const response = await this.companyservice.deleteACompany(Number(id))
            if(response.message){
                return response
            } 
        } catch {
            throw new HttpException("Company Failed to update",
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}