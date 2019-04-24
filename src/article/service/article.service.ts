import {Injectable} from '@nestjs/common';
import {article} from '../../../codegen/rpc';
import ArticleType = article.Article.ArticleType;
import IArticle = article.IArticle;

const ARTICLES: IArticle[] = [
  {
    id: 'c4f06ded7d43c7f594a35',
    title: 'I made $1m on bitcoin – and lost it again',
    bodyText: 'I still believe that bitcoin is a force for good. I recently interviewed Alex Gladstein of the Human Rights Foundation, who was explaining how it helps people living in authoritarian regimes to prosper – for example, women in Afghanistan who are not allowed to open bank accounts can still work and get paid in bitcoin. It is a step in the right direction. My main focus now is exploring how bitcoin could help stabilise an increasingly volatile world.',
    articleType: ArticleType.PHOTO,
  },
  {
    id: '7e55c381308c4f06',
    bodyText: 'The door policies for Berlin’s nightclubs are some of the most talked about in the world. Online forums detail appropriate clothing, what to say and how to act in line in order to get in. In the German capital, bouncers don’t just play the role of security, but also curator, sussing out who can handle the extreme depths of hedonism and who might gawk or yuck at what they see.',
    title: 'It\'s an absurd profession\': the world\'s most infamous bouncers tell all',
    articleType: ArticleType.VIDEO,
  },
  {
    id: 'fd94dlf0a123dsf',
    bodyText: 'In the early 2000s, Chicago photographer Carlos Javier Ortiz had a dream of becoming a photojournalist. But after working at a local newspaper, he quickly learned that it just wasn’t for him.',
    title: 'It\'s all about community\': the photographer who captures unseen Chicago',
    articleType: ArticleType.TEXTARTICLE,
  },
];

@Injectable()
export class ArticleService {

  getArticle(id: string): IArticle {
    return ARTICLES.find(n => n.id === id);
  }

  listArticles(): IArticle[] {
    return ARTICLES;
  }

  addArticle(article: IArticle): IArticle {
    ARTICLES.push(article);
    return this.getArticle(article.id);
  }

  getArticleType(article: article.IArticle) {
    switch (article.articleType) {
      case ArticleType.PHOTO: {
        return 'PHOTO';
        break;
      }
      case ArticleType.VIDEO: {
        return 'VIDEO';
        break;
      }
      case ArticleType.TEXTARTICLE: {
        return 'TEXTARTICLE';
        break;
      }
      default: {
        return 'TEXTARTICLE';
        break;
      }
    }
  }

  getArticleTypeIdentifier(articleType) {
    switch (articleType) {
      case 'PHOTO': {
        return 1;
        break;
      }
      case 'VIDEO': {
        return 2;
        break;
      }
      case 'TEXTARTICLE': {
        return 0;
        break;
      }
      default: {
        return 0;
        break;
      }
    }
  }

}
