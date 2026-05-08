import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Validation Pipe
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

  // Timezone
  process.env.TZ = '-03:00';

  // Verifica conexão PostgreSQL
  const dataSource = app.get(DataSource);

  if (dataSource.isInitialized) {
    console.log('🐘 PostgreSQL conectado com sucesso!');
  } else {
    console.log('❌ Erro ao conectar no PostgreSQL!');
  }

  // Inicia servidor
  const port = process.env.PORT || 4000;

  await app.listen(port);

  console.log(🚀 Servidor rodando na porta ${port});
  console.log(📚 Swagger disponível em /swagger);
}

bootstrap();
