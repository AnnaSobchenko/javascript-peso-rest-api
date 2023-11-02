import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IAllUsers, IUser } from "src/interfaces";
import { User } from "../schema/users.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpateUserDto } from "./dto/update.dto";
import { GetAllUsersDto } from "./dto/get-all-users.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

  async createUser(dto: User) {
    const user = await this.userModel.create(dto);
    const newUser = new CreateUserDto(user);
    return newUser;
  }
  async updateUser(dto: UpateUserDto) {
    const { email } = dto;
    const user = await this.userModel.findOneAndUpdate(
      { email },
      { ...dto },
      { new: true }
    );
    const userNew = new CreateUserDto(user);
    return userNew;
  }

  async getAllUsers(): Promise<IAllUsers[]> {
    const users = await this.userModel.find(
      {},
      { email: 1, name: 1, role: 1, _id: 1 }
    );
    return users;
  }

  async getUserByEmail(email: string): Promise<IUser> {
    const user = await this.userModel.findOne({ email });
    return user;
  }
}
