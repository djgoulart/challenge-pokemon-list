'use client'

import { useQuery } from '@tanstack/react-query'

import { PokemonListPlaceholder } from './pokemon-list-placeholder'
import { PokemonsListWrapper } from './pokemons-list-wrapper'
import { assignAcronymAndFallbackColor } from '../_utils/assign-fallback-color'
import { FetchErrorPlaceholder } from './fetch-error-placeholder'

export type PokemonData = {
  name: string
  url: string
}

type FetchResponse = {
  count: number
  results: PokemonData[]
  next?: string
  previous?: string
}

const fetchPokemons = async (): Promise<FetchResponse> => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  // throw new Error('Failed to fetch pokemons')
  return await res.json()
}

export function PokemonList() {
  const { data, isSuccess, isFetching, isError } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  })

  if (isError) return <FetchErrorPlaceholder />
  if (isFetching) return <PokemonListPlaceholder />

  return (
    <>
      {isSuccess && data && (
        <PokemonsListWrapper
          pokemons={assignAcronymAndFallbackColor(data.results)}
        />
      )}
    </>
  )
}
