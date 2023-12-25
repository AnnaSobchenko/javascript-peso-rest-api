import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";
import { TeamSchema } from "src/schemas/team.schema"; 


@Module({
  imports: [MongooseModule.forFeature([{ name: "Team", schema: TeamSchema }])], 
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}