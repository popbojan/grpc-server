import { Module } from '@nestjs/common';
import {AppService} from './app.service';
import {AppController} from './app.controller';
import { NinjaModule } from './ninja/ninja.module';
import { GraphQLModule} from '@nestjs/graphql';
import {ArticleModule} from './article/article.module';
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
      }),
    }),
    NinjaModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule {}
