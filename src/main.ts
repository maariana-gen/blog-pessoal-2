import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto Blog Pessoal')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  process.env.TZ = '-03:00';

  // TESTA conexão com PostgreSQL
  const dataSource = app.get(DataSource);

  if (dataSource.isInitialized) {
    console.log('🐘 PostgreSQL conectado com sucesso!');
  } else {
    console.log('❌ Erro ao conectar no PostgreSQL!');
  }

  await app.listen(process.env.PORT  4000);

  console.log(`🚀 Servidor rodando na porta ${process.env.PORT 
 4000}`);
}

bootstrap();
