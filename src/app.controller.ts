import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreatePokemon } from './dto/createPokemon';
import PokemonRepository from './repositories/pokemonRepository';

@Controller('app')
export class AppController {
  constructor(private pokemonRepository: PokemonRepository) {}

  @Get('healthcheck')
  getHealthCheck(): { ok: boolean } {
    return {
      ok: true,
    };
  }

  // @Get('pokemon')
  // async createPokemon(): Promise<{ id: string; name: string; type: string }> {
  //   const pokemon = await this.prisma.pokemon.create({
  //     data: {
  //       id: '2',
  //       name: 'Ivysaur',
  //       type: 'Grass',
  //     },
  //   });

  //   return pokemon;
  // }

  @Post('pokemon')
  async createPokemonPost(@Body() body: CreatePokemon): Promise<void> {
    const { id, name, type } = body;

    await this.pokemonRepository.create({ id, name, type });
  }
}
