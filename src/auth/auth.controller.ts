import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import {
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { AuthService } from "./auth.services";
import { AuthDto } from "./dto/auth.dto";
import { User } from "src/schema/users.schema";
import { JwtAuthGuard } from "./jwt-auth.guard";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCookieAuth()
  @ApiOperation({ summary: "New user sign up" })
  @ApiResponse({ status: 200, type: AuthDto })
  @Post("/signup")
  signupUserConroller(@Body() authDto: User) {
    return this.authService.signupUser(authDto);
  }
  @ApiOperation({ summary: "User sign in" })
  @ApiResponse({ status: 200, type: AuthDto })
  @Post("/signin")
  signinUserConroller(@Body() authDto: User) {
    return this.authService.signinUser(authDto);
  }

  @ApiOperation({ summary: "User logout" })
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @Post("/logout")
  logoutUserConroller(@Request() token) {
    return this.authService.logoutUser(token);
  }
}
