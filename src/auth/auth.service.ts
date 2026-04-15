import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) { }

    // Método exigido pelo LocalStrategy para validar o login
    async validateUser(usuario: string, senha: string): Promise<any> {
        // 1. Busca o utilizador na base de dados através do serviço de utilizador
        const buscaUsuario = await this.usuarioService.findByUsuario(usuario);

        // 2. Se o utilizador existir, compara a senha digitada com a senha encriptada
        if (buscaUsuario) {
            const senhasConferem = await bcrypt.compare(senha, buscaUsuario.senha);
            if (senhasConferem) {
                return buscaUsuario; // Retorna os dados se tudo estiver correto
            }
        }

        return null; // Falha na autenticação (senha errada ou utilizador não existe)
    }

    async login(user: any) {
        const payload = { username: user.usuario, sub: user.id };

        return {
            id: user.id,
            nome: user.nome,
            usuario: user.usuario,
            foto: user.foto,
            // Mudei de "access_token" para "token" para o Teste e o Front-end funcionarem corretamente
            token: this.jwtService.sign(payload),
        };
    }
}