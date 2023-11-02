import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.services";
import { AuthDto } from "./dto/auth.dto";
import { User } from "src/schema/users.schema";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "New user sign up" })
  @ApiResponse({ status: 200, type: AuthDto })
  @Post("/signup")
  signupUserConroller(@Body() authDto: User) {
    return this.authService.signupUser(authDto);
  }
  @ApiOperation({ summary: "New user sign up" })
  @ApiResponse({ status: 200, type: AuthDto })
  @Post("/signin")
  signinUserConroller(@Body() authDto: User) {
    return this.authService.signinUser(authDto);
  }
}
