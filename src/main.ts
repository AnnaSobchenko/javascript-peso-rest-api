import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("One Pirate Pesso")
    .setDescription("REST-API for WebGame")
    .setVersion("1.0.0")
    .addTag("Website for WebGame 'One Pirate Pesso'")
    .addCookieAuth("refreshToken")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api/docs", app, document, {
    swaggerOptions: {
      requestInterceptor: (req) => {
        req.credentials = "include";
        return req;
      },
    },
  });

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
