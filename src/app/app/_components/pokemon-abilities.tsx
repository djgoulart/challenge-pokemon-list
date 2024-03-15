import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

type PokemonAbilitiesProps = {
  abilities: PokemonAbility[]
}

export function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  return (
    <div className="flex justify-start items-center gap-2">
      {abilities.map(({ ability }) => (
        <Badge key={ability.name} variant="outline">
          {ability.name}
        </Badge>
      ))}
    </div>
  )
}

export function PokemonAbilitiesPlaceholder() {
  return (
    <div className="flex gap-4 items-center">
      <Skeleton className="h-4 w-[60px]" />
      <Skeleton className="h-4 w-[60px]" />
      <Skeleton className="h-4 w-[60px]" />
    </div>
  )
}
