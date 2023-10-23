import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetAllUsersDto {
  @ApiProperty({ example: "user@mail.com", description: "Users' email" })
  @IsString()
  readonly email: string;

  @ApiProperty({ example: "UserName", description: "Users' name" })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: "user", description: "Users' role" })
  @IsString()
  readonly role: string;
}
