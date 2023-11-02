// import mongoose from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { Types } from "mongoose";

// export const UserSchema = new mongoose.Schema({
//   email: String,

//   password: String,
// });

@Schema({
  timestamps: true,
})
export class User {
  @ApiProperty({ example: "user@mail.com", description: "Users' email" })
  @Prop({ unique: [true, "Duplicate email entered"] })
  email: string;

  @ApiProperty({ example: "Userwefwfid", description: "Users' id" })
  @Prop({ default: `pirate${Date.now()}` })
  _id: string;

  @ApiProperty({ example: "UserName", description: "Users' name" })
  @Prop()
  name: string;

  @ApiProperty({ example: "userPassword", description: "Users' password" })
  @Prop()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @Prop({ default: "" })
  refreshToken: string;

  @ApiProperty({ example: "user", description: "Users' role" })
  @Prop()
  role: string;

  @Prop({ default: "" })
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
