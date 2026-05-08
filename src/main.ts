import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap'); // Cria um logger com o contexto "Bootstrap"

  try {
    const app = await NestFactory.create(AppModule);

    // Configuração do CORS
    app.enableCors({
      origin: '*', // Em produção, coloque a URL do front-end
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    // Validation Pipe
    app.useGlobalPipes(new ValidationPipe());

    // Configuração do Swagger
    const config = new DocumentBuilder()
      .setTitle('Blog Pessoal')
      .setDescription('Projeto Blog Pessoal')
      .setVersion('1.0')
      .setContact(
        'Seu Nome',
        'http://www.seugithub.com/',
        'seuemail@email.com',
      )
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    // Configura o fuso horário
    process.env.TZ = '-03:00';

    // Porta do Render ou Local
    const port = process.env.PORT || 4000;

    await app.listen(port);

    // Se chegar aqui, significa que o AppModule carregou e o Banco conectou com sucesso
    logger.log(✅ Servidor rodando em http://localhost:${port}/swagger);
    logger.log(🐘 Conexão com o Banco de Dados PostgreSQL estabelecida com sucesso!);

  } catch (error) {
    // Caso ocorra erro na conexão com o banco ou inicialização
    logger.error('❌ Falha ao iniciar a aplicação:', error);
    process.exit(1); // Fecha o processo com erro
  }
}

bootstrap();
