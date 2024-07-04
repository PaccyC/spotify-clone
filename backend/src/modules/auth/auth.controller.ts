import { Body, Controller, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, SigninDto } from './dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}
    @Post("/signup")
     signup(
      @Body() dto:CreateUserDto
     ){
  return this.authService.signup(dto);
    }

    @Post("/signin") 
    signin(
      @Body() dto:SigninDto
    ){
  return this.authService.signin(dto);
    }

    @Post('/request-password-reset')
    async requestPasswordReset(
      @Body('email') email:string 
    ){

  await this.authService.sendPasswordResetEmail(email);
    return { message: 'Password reset email sent' };
      }

      @Post('/reset-password')
      async resetPassword(@Body() body: { token: string; newPassword: string }) {
        console.log('Received reset-password request:', body); // Debugging line
        const { token, newPassword } = body;
        await this.authService.resetPassword(token, newPassword);
        return { message: 'Password has been reset' };
      }
}
