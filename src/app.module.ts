import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AcceptLanguageResolver,QueryResolver,I18nModule} from 'nestjs-i18n'
import * as path from 'path'
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
