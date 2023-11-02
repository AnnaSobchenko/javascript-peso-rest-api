import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetAllUsersDto {
  @ApiProperty({ example: "user@mail.com", description: "Users' email" })
  @IsString()
  readonly email: string;

  @ApiProperty({ example: "user11212mail478com", description: "Users' id" })
  @IsString()
  readonly _id: string;

  @ApiProperty({ example: "UserName", description: "Users' name" })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: "user", description: "Users' role" })
  @IsString()
  readonly role: string;

  constructor(model) {
    this.email = model.email;
    this._id = model._id;
    this.name = model.name;
    this.role = model.role;
  }
}
