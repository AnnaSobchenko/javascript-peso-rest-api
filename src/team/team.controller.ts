import { Body, Controller, Get, Post, Param, Patch, Delete, Query } from "@nestjs/common";
import { TeamDto } from "./dto/team.dto"; 
import { TeamService } from "./team.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";


@ApiTags("Team")
@Controller("team")
export class TeamController {
  constructor(private teamService: TeamService) {}

  @ApiOperation({ summary: "Get all team members" })
  @ApiResponse({ status: 200, type: [TeamDto] })
  @Get()
  getAllController() {
    return this.teamService.getAllTeam();
  }

  @ApiOperation({ summary: "Get team member by id" })
  @ApiResponse({ status: 200, type: TeamDto })
  @Get(":id") 
  getTeamByIdController(@Param("id") id: string) {
    return this.teamService.getTeamById(id);
  }

  @ApiOperation({ summary: "Delete team member" })
  @ApiResponse({ status: 200, type: TeamDto })
  @Delete(":id")
  deleteTeamController(@Param("id") id: string) {
    return this.teamService.deleteTeam(id);
  }
}