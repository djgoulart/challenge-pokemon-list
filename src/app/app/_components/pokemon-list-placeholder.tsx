import { Skeleton } from '@/components/ui/skeleton'

export function PokemonListPlaceholder() {
  const items = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="flex flex-col gap-4">
      {items.map((i) => (
        <div key={`${i}`} className="flex items-center gap-4 w-full p-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-3 w-full">
            <Skeleton className="h-4 w-full" />
            <div className="flex gap-4 items-center">
              <Skeleton className="h-4 w-[60px]" />
              <Skeleton className="h-4 w-[60px]" />
              <Skeleton className="h-4 w-[60px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
