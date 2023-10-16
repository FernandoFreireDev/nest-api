import { IsNotEmpty, Length } from 'class-validator';

export class CreatePokemon {
  @IsNotEmpty()
  id: string;

  @Length(2, 10)
  @IsNotEmpty({
    message: 'Nome é um campo obrigatório',
  })
  name: string;

  @IsNotEmpty()
  type: string;
}
