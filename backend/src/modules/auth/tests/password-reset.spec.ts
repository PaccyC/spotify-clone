import * as request from 'supertest'
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../../app.module';


describe('Password Reset',()=>{
    let app:INestApplication;

    beforeAll(async ()=>{
        const moduleFixture = await Test.createTestingModule({
            imports:[AppModule],
        }).compile();

        app= moduleFixture.createNestApplication();
        await app.init();
    })

    it("Should reset a password", async ()=>{
        const email= "abayisengaaimepacifique@gmail.com";

        await request(app.getHttpServer())
         .post('/auth/request-password-reset')
         .send({email})
         expect(200)

         const resetToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoiYWJheWlzZW5nYWFpbWVwYWNpZmlxdWVAZ21haWwuY29tIiwiaWF0IjoxNzE5OTkzMDUwLCJleHAiOjE3MjAwNzk0NTB9.T7ePu6cS11NgqJ0RiTZJOUbpKeiCzbVf__P-1K5zzGI';
         
         await request(app.getHttpServer())
      .post('/auth/reset-password')
      .send({
        token: resetToken,
        password: 'newpassword123',
      })
      .expect(200);

      await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email,
        password: 'newpassword123',
      })
      .expect(200);
  });
     
  afterAll(async ()=>{
    await app.close();
  })
      
    })
   