import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUser } from "src/interfaces";
import { Users } from "./user.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private userModel: Model<IUser>) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find({});
    return users;
  }
}
