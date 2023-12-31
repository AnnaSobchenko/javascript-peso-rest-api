import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "Users' email" })
  @IsString()
  readonly email?: string;

  @ApiProperty({ example: "user11212mail478com", description: "Users' id" })
  @IsString()
  readonly _id?: string;

  @ApiProperty({ example: "UserName", description: "Users' name" })
  @IsString()
  readonly name?: string;

  @ApiProperty({
    example:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjliNzY1MGQ5NWJjOWQ5ZDdjNGRkZjgiLCJpYXQiOjE2NTQzNTU3MTIsImV4cCI6MTY1NDM1OTMxMn0.RWeRPi75Hl0kqsyPMEMbEBzXlu8jIVtXDXG84PijOJM",
    description: "Users' refreshToken",
  })
  @IsString()
  readonly refreshToken?: string;

  @ApiProperty({ example: "user", description: "Users' role" })
  @IsString()
  readonly role?: string;

  @ApiProperty({
    example:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjliNmEzMmUzM2Q1YzBjM2Y0MjNhY2UiLCJpYXQiOjE2NTQ2NzA4MjIsImV4cCI6MTY1NDY3NDQyMn0.qYMcQgrq_gg19rttwCHXLT2NHr0wJAjjYmWPMZXy1fw",
    description: "Users' token",
  })
  @IsString()
  readonly token?: string;

  constructor(model) {
    this.email = model.email;
    this._id = model._id;
    this.name = model.name;
    this.refreshToken = model.refreshToken;
    this.role = model.role;
    this.token = model.token;
  }
}
