// import mongoose from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

// export const UserSchema = new mongoose.Schema({
//   email: String,

//   password: String,
// });

@Schema({
  timestamps: true,
})
export class User {
  @ApiProperty({ example: "user@mail.com", description: "Users' email" })
  @Prop()
  email: string;

  @ApiProperty({ example: "UserName", description: "Users' name" })
  @Prop()
  name: string;

  @ApiProperty({ example: "userPassword", description: "Users' password" })
  @Prop()
  password: string;

  // @Prop()
  // refreshToken: string;

  @ApiProperty({ example: "user", description: "Users' role" })
  @Prop()
  role: string;

  // @Prop()
  // token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
