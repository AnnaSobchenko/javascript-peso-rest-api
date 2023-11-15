import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NewsController } from "./news.controller";
import { NewsService } from "./news.service";
import { NewsSchema } from "src/schemas/news.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "News", schema: NewsSchema }])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
