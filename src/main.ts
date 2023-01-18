import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import helmet from 'helmet'
import passport from 'passport'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cookieParser from 'cookie-parser'
// import compression from 'compression'
import { isProdEnv } from './app.environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, isProdEnv ? { logger: false } : {})
  app.use(helmet())
  app.use(compression())
  app.use(cookieParser())
  app.use(bodyParser.json({ limit: '1mb' }))
  app.use(bodyParser.urlencoded({ extended: true }))

  const config = new DocumentBuilder()
    .setTitle('talent point')
    .setDescription('The postes API description')
    .setVersion('1.0')
    .addTag('blog')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  return await app.listen(8181)
}
bootstrap()
