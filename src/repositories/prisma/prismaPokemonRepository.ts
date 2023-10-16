import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import PokemonRepository from '../pokemonRepository';

@Injectable()
export class PrismaPokemonRepository implements PokemonRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    id,
    name,
    type,
  }: {
    id: string;
    name: string;
    type: string;
  }): Promise<void> {
    await this.prisma.pokemon.create({ data: { id, name, type } });
  }
}
