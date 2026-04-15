import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy'; // <--- IMPORTAÇÃO AQUI

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secret', // Ou o jwtConstants se estiver a usar
            signOptions: { expiresIn: '1h' },
        }),
    ],
    // O SEGREDO ESTÁ AQUI: Tem que ter as 3 coisas dentro dos providers!
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }