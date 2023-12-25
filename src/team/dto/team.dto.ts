import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class TeamDto {
  @ApiProperty({ example: "1", description: "Unique ID" })
  @IsString()
  id: string;

  @ApiProperty({ example: "Martin Liminovic", description: "Team member's full name in English" })
  @IsString()
  nameEn: string;

  @ApiProperty({ example: "Мартін Ліміновіч", description: "Team member's full name in Ukrainian" })
  @IsString()
  nameUa: string;

  @ApiProperty({ example: "https://example.com/avatar.jpg", description: "URL of the avatar image" })
  @IsString()
  avatar: string;

  @ApiProperty({ example: "https://github.com/MartinLilt", description: "GitHub profile URL" })
  @IsString()
  github: string;

  @ApiProperty({ example: "https://linkedin.com/in/martin-liminovic-44046b21a/", description: "LinkedIn profile URL" })
  @IsString()
  linkedin: string;

  constructor(model) {
    this.id = model.id;
    this.nameEn = model.nameEn;
    this.nameUa = model.nameUa;
    this.avatar = model.avatar;
    this.github = model.github;
    this.linkedin = model.linkedin;
  }
}