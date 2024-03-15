type PokemonListItem = {
  name: string
  url: string
  acronym: string
  colorClass: string
}

type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

type PokemonDetails = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  abilities: PokemonAbility[]
  acronym: string
  colorClass: string
}

export type { PokemonListItem, PokemonDetails, PokemonAbility }
