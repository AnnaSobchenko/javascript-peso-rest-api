import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NewsService } from "./news.service";
import { GetAllNewsDto } from "./dto/get-all-news.dto";

@ApiTags("News")
@Controller("news")
export class NewsController {
  constructor(private newsService: NewsService) {}

  @ApiOperation({ summary: "Get all news" })
  @ApiResponse({ status: 200, type: [GetAllNewsDto] })
  @Get()
  getAllConroller() {
    console.log("object");
    return this.newsService.getAllNews();
  }
}
