import { generateAcronym } from './generate-acronym'
import { PokemonData } from '../_components/pokemon-list'

export type PokemonWithAcronymAndColor = PokemonData & {
  acronym: string
  colorClass: string
}

export function assignAcronymAndFallbackColor(
  pokemonData: PokemonData[],
): PokemonWithAcronymAndColor[] {
  const tailwindColors = [
    'bg-red-300',
    'bg-green-300',
    'bg-blue-300',
    'bg-yellow-300',
    'bg-purple-300',
    'bg-indigo-300',
    'bg-pink-300',
    'bg-teal-300',
    'bg-orange-300',
    'bg-gray-300',
  ]

  return pokemonData.map((pokemon, index) => {
    const acronym = generateAcronym(pokemon.name)
    const colorClass = tailwindColors[index % tailwindColors.length]

    return {
      ...pokemon,
      acronym,
      colorClass,
    }
  })
}
