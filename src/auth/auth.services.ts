import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UsersService } from "src/users/users.service";
import { User } from "src/schemas/users.schema";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async signupUser(dto: User) {
    const candidate = await this.userService.getUserByEmail(dto.email);

    if (candidate) {
      throw new HttpException(
        "User with email in database",
        HttpStatus.BAD_REQUEST
      );
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    });
    const { token, refreshToken } = await this.generateTokens(user);
    const { email, name, role, _id } = user;
    const userFull = { email, name, role, _id, token, refreshToken };
    return await this.userService.updateUser(userFull);
  }

  async signinUser(dto: User) {
    const userIn = await this.userService.getUserByEmail(dto.email);

    if (!userIn) {
      throw new HttpException(
        "You're not registration",
        HttpStatus.BAD_REQUEST
      );
    }

    const passwordEquals = await bcrypt.compare(dto.password, userIn.password);

    if (userIn && passwordEquals) {
      const { token, refreshToken } = await this.generateTokens(userIn);
      const userFull = { email: userIn.email, token, refreshToken };
      return await this.userService.updateUser(userFull);
    }

    throw new UnauthorizedException("Error email or password");
  }

  async logoutUser({ headers }) {
    const [bearer, token] = headers.authorization.split(" ");
    const dto = { tokenUser: token, token: "", refreshToken: "" };
    await this.userService.updateUserByToken(dto);
    return;
  }

  private async generateTokens(user: CreateUserDto) {
    const payload = { email: user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.JWT_EXPIRES_IN_REFRESH,
    });
    return { token, refreshToken };
  }
}
