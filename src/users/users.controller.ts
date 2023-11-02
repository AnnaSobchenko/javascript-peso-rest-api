import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "../schema/users.schema";
import { GetAllUsersDto } from "./dto/get-all-users.dto";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: "Create new user" })
  @ApiResponse({ status: 200, type: CreateUserDto })
  @Post()
  createUserConroller(@Body() userDto: User) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [GetAllUsersDto] })
  @Get()
  getAllConroller() {
    return this.userService.getAllUsers();
  }
}
