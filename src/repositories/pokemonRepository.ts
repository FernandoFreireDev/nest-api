abstract class PokemonRepository {
  abstract create({
    id,
    name,
    type,
  }: {
    id: string;
    name: string;
    type: string;
  }): Promise<void>;
}

export default PokemonRepository;
