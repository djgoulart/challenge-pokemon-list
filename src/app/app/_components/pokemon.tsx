import { List } from '@/components/list'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PokemonAbilities } from './pokemon-abilities'
import { PokemonDetails } from '../_types/pokemon'

type PokemonProps = {
  pokemon: PokemonDetails
  disableImage?: boolean
}

export function Pokemon({ pokemon, disableImage = false }: PokemonProps) {
  return (
    <List.Item className="flex items-center gap-2 w-full">
      <List.ItemThumb>
        <Avatar className="flex h-12 w-12 items-center justify-center space-y-0 border">
          <AvatarImage
            src={disableImage ? '' : pokemon.sprites.front_default}
            alt={pokemon.name}
            role="avatar-image"
          />
          <AvatarFallback className={pokemon.colorClass}>
            {pokemon.acronym}
          </AvatarFallback>
        </Avatar>
      </List.ItemThumb>
      <div className="flex flex-col">
        <List.ItemTitle className="font-medium text-primary text-xl">
          {pokemon.name}
        </List.ItemTitle>
        <List.ItemDescription asChild>
          <PokemonAbilities abilities={pokemon.abilities} />
        </List.ItemDescription>
      </div>
    </List.Item>
  )
}
