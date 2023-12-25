import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ITeam } from "src/interfaces";
import { Team } from "src/schemas/team.schema";

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<ITeam>) {}

  async getAllTeam(): Promise<ITeam[]> {
    const team = await this.teamModel.find({});
    return team;
  }

  async getTeamById(id: string): Promise<ITeam> {
    const team = await this.teamModel.findById(id);
    return team;
  }

  async createTeam(team: ITeam): Promise<ITeam> {
    const newTeam = new this.teamModel(team);
    return newTeam.save();
  }

  async updateTeam(id: string, updateTeamDto: ITeam): Promise<ITeam> {
    const updatedTeam = await this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true });
    return updatedTeam;
  }

  async deleteTeam(id: string): Promise<ITeam> {
    const deletedTeam = await this.teamModel.findByIdAndRemove(id);
    return deletedTeam;
  }
}

