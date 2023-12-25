import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@Schema({
    timestamps: true,
})

export class Team {
  @ApiProperty({ example: "1", description: "Unique ID" })
  @IsNotEmpty()
  @IsString()
  @Prop()
  id: string;

  @ApiProperty({ example: "Martin Liminovic", description: "Team member's full name in English" })
  @IsNotEmpty()
  @IsString()
  @Prop()
  nameEn: string;

  @ApiProperty({ example: "Мартін Ліміновіч", description: "Team member's full name in Ukrainian" })
  @IsNotEmpty()
  @IsString()
  @Prop()
  nameUa: string;

  @ApiProperty({ example: "https://example.com/avatar.jpg", description: "URL of the avatar image" })
  @IsNotEmpty()
  @IsString()
  @Prop()
  avatar: string;

  @ApiProperty({ example: "https://github.com/MartinLilt", description: "GitHub profile URL" })
  @IsNotEmpty()
  @IsString()
  @Prop()
  github: string;

  @ApiProperty({ example: "https://linkedin.com/in/martin-liminovic-44046b21a/", description: "LinkedIn profile URL" })
  @IsNotEmpty()
  @IsString()
  @Prop()
  linkedin: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);




