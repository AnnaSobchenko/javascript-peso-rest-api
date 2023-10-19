// import mongoose from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// export const UserSchema = new mongoose.Schema({
//   email: String,

//   password: String,
// });

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  email: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
