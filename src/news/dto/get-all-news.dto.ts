import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetAllNewsDto {
  @ApiProperty({ example: "Userwefwfid", description: "News' id" })
  _id: string;

  @ApiProperty({
    example: "Оновлений режим “Піратський альянс“",
    description: "Title news' UK",
  })
  @IsString()
  nameUa: string;

  @ApiProperty({
    example:
      "У грі з'явився новий режим, де гравці можуть об'єднуватися в альянси, …",
    description: "Text news' UK",
  })
  @IsString()
  textUa: string;

  @ApiProperty({
    example: "Updated 'Pirate Alliance' Mode",
    description: "Title news' EN",
  })
  @IsString()
  nameEn: string;

  @ApiProperty({
    example:
      "A new mode has been added to the game where players can form alliances…",
    description: "Text news' EN",
  })
  @IsString()
  textEn: string;

  @ApiProperty({
    example: "https://live.staticflickr.com/65535/53140347014_bf5e27c236_z.jpg",
    description: "Text news' EN",
  })
  @IsString()
  img: string;

  constructor(model) {
    this._id = model._id;
    this.nameUa = model.nameUa;
    this.textUa = model.textUa;
    this.nameEn = model.nameEn;
    this.textEn = model.textEn;
    this.img = model.img;
  }
}
