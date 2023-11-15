import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { INews } from "src/interfaces";
import { News } from "src/schemas/news.schema";

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<INews>) {}

  async getAllNews(): Promise<INews[]> {
    const news = await this.newsModel.find({});
    return news;
  }
}
