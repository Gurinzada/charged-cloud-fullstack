import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateCompanyDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @Matches(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/, {
    message: 'CNPJ must be valid (format: 00.000.000/0000-00 or only digits)',
  })
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  website: string;
}
