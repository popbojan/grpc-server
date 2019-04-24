import {Module} from '@nestjs/common';
import {ArticleResolver} from './resolver/article-resolver';
import {ArticleService} from './service/article.service';
import {ArticleController} from './controller/article.controller';

@Module({
  controllers: [ArticleController],
  imports: [],
  providers: [ArticleService, ArticleResolver],
  exports: [ArticleResolver],
})
export class ArticleModule {
}
