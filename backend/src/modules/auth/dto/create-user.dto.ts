import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto{

    @IsString()
    @IsOptional()
    firstName:string;

    @IsString()
    @IsOptional()
    lastName:string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty()
    password:string;
}