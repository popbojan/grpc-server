import {Args, Mutation, Parent, Query, ResolveProperty, Resolver} from '@nestjs/graphql';
import {ArticleService} from '../service/article.service';
import {article} from '../../../codegen/rpc';
import ListArticles = article.ListArticles;
import IArticle = article.IArticle;
import Article = article.Article;

@Resolver('Article')
export class ArticleResolver {

  constructor(private readonly articleService: ArticleService) {
  }

  /**
   * @name getArticle
   * @desc Get article by article id
   * @returns IArticle
   */
  @Query('getArticleByArticleId')
  public async getArticleByArticleId(@Args('articleId') articleId): Promise<IArticle> {
    return this.articleService.getArticle(articleId);
  }

  /**
   * @name getArticles
   * @desc Get list of articles
   * @returns ListArticles`
   */
  @Query('getArticles')
  public async getArticles(): Promise<ListArticles> {
    const articles = this.articleService.listArticles();
    return ListArticles.create({articles});
  }

  @ResolveProperty('articleType')
  public async getArticleType(@Parent() article: IArticle) {
    return this.articleService.getArticleType(article);
  }

  @Mutation('newArticle')
  public async newArticle(@Args('id') id, @Args('title') title, @Args('bodyText') bodyText, @Args('articleType') articleType): Promise<IArticle> {
    return this.articleService.addArticle(new Article({id: id, articleType: this.articleService.getArticleTypeIdentifier(articleType), bodyText: bodyText, title: title}));
  }
}
