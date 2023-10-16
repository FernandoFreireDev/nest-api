import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaPokemonRepository } from './repositories/prisma/prismaPokemonRepository';
import PokemonRepository from './repositories/pokemonRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: PokemonRepository,
      useClass: PrismaPokemonRepository,
    },
  ],
})
export class AppModule {}
