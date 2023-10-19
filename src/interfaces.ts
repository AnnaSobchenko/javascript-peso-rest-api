import { Document } from "mongoose";

export interface IUser extends Document {
  email: String;
  password: String;
}
