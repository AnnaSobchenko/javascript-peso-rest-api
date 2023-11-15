import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@Schema({
  timestamps: true,
})
export class News {
  @ApiProperty({ example: "Userwefwfid", description: "News' id" })
  @Prop({ default: `pirate${Date.now()}` })
  _id: string;

  @ApiProperty({
    example: "Оновлений режим “Піратський альянс“",
    description: "Title news' UK",
  })
  @Prop()
  @IsNotEmpty()
  @IsString()
  nameUa: string;

  @ApiProperty({
    example:
      "У грі з'явився новий режим, де гравці можуть об'єднуватися в альянси, …",
    description: "Text news' UK",
  })
  @Prop()
  @IsNotEmpty()
  @IsString()
  textUa: string;

  @ApiProperty({
    example: "Updated 'Pirate Alliance' Mode",
    description: "Title news' EN",
  })
  @Prop()
  @IsNotEmpty()
  @IsString()
  nameEn: string;

  @ApiProperty({
    example:
      "A new mode has been added to the game where players can form alliances…",
    description: "Text news' EN",
  })
  @Prop()
  @IsNotEmpty()
  @IsString()
  textEn: string;

  @ApiProperty({
    example: "https://live.staticflickr.com/65535/53140347014_bf5e27c236_z.jpg",
    description: "Text news' EN",
  })
  @Prop({
    default:
      "https://res.cloudinary.com/drmtodo79/image/upload/v1700056909/Assets/OnePiratePeso_v4hd0y.jpg",
  })
  @IsNotEmpty()
  @IsString()
  img: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);
