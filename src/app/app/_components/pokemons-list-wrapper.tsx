import React from 'react'
import { useQueries } from '@tanstack/react-query'

import { Pokemon } from './pokemon'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PokemonDetails, PokemonListItem } from '../_types/pokemon'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

type PokemonsListWrapperProps = {
  pokemons: PokemonListItem[]
}

const fetchPokemon = async (
  pokemon: PokemonListItem,
): Promise<PokemonDetails> => {
  const res = await fetch(pokemon.url)
  const json = await res.json()
  return { ...json, acronym: pokemon.acronym, colorClass: pokemon.colorClass }
}

export function PokemonsListWrapper({ pokemons }: PokemonsListWrapperProps) {
  const [value, setValue] = React.useState('')
  const [hideImages, setHideImages] = React.useState(false)
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const commandRef = React.useRef<HTMLDivElement>(null)

  const pokemonsWithDetails = useQueries({
    queries: pokemons.map((pokemon) => {
      return {
        queryKey: ['pokemon', pokemon.name],
        queryFn: () => fetchPokemon(pokemon),
      }
    }),
  })

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  React.useEffect(() => {
    const assignFocus = () => {
      if (commandRef.current) {
        commandRef.current?.focus()
      }
    }

    return assignFocus()
  }, [])

  return (
    <Command ref={commandRef} className="focus-visible:outline-none">
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="hide-images"
          onCheckedChange={() => setHideImages((old) => !old)}
          checked={hideImages}
        />
        <Label htmlFor="hide-images">Hide Pokemon Images</Label>
      </div>
      <CommandInput ref={searchInputRef} placeholder="Search pokemon..." />
      <CommandEmpty>No pokemon found.</CommandEmpty>
      <CommandGroup>
        <CommandList className="h-full max-h-[600px]">
          <ScrollArea className="h-[600px]">
            {pokemonsWithDetails &&
              pokemonsWithDetails.map(
                ({ data: pokemon }) =>
                  pokemon && (
                    <CommandItem
                      key={pokemon.id}
                      value={pokemon.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue)
                      }}
                      className="data-[selected=true]:bg-green-100 border-4 border-transparent rounded-lg data-[selected=true]:border-4 data-[selected=true]:border-green-200"
                    >
                      <Pokemon pokemon={pokemon} disableImage={hideImages} />
                    </CommandItem>
                  ),
              )}
          </ScrollArea>
        </CommandList>
      </CommandGroup>
    </Command>
  )
}
