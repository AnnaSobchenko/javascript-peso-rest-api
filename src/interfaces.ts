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
export interface INews extends Document {
  id: string;
  nameUa: string;
  textUa: string;
  nameEn: string;
  textEn: string;
  img: string;
}

export interface ITeam extends Document {
  id: string;
  nameUa: string;
  nameEn: string;
  avatar: string;
  github: string;
  linkedin: string;
}


