import { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  _id: string;
  name: string;
  password: string;
  refreshToken: string;
  role: string;
  token: string;
}

export interface IAllUsers extends Document {
  email: string;
  _id: string;
  name: string;
  role: string;
}
