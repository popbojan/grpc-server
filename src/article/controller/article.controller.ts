import {Controller} from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices';
import {ArticleService} from '../service/article.service';
import {article} from '../../../codegen/rpc';
import ArticleById = article.ArticleById;
import IArticle = article.IArticle;
import ListArticles = article.ListArticles;
import IEmpty = article.IEmpty;

@Controller()
export class ArticleController {

  constructor(private readonly articleService: ArticleService) {
  }

  @GrpcMethod('ArticleService', 'FindOne')
  findOne(data: ArticleById): IArticle {
    return this.articleService.getArticle(data.id);
  }

  @GrpcMethod('ArticleService', 'FindAll')
  async findAll(req: IEmpty): Promise<ListArticles> {
    const articles = this.articleService.listArticles();
    return ListArticles.create({articles});
  }

  @GrpcMethod('ArticleService', 'Add')
  add(article: IArticle): IArticle {
    return this.articleService.addArticle(article);
  }
}
