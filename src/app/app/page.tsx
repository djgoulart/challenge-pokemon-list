import { Page } from '@/components/page'
import { PokemonList } from './_components/pokemon-list'
import { PokemonQueryProvider } from './_providers/pokemons-query-provider'

export default async function AppPage() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.HeaderTitle>Pokemons List</Page.HeaderTitle>
      </Page.Header>
      <Page.Main>
        <div className="w-full max-w-[50rem] mx-auto">
          <PokemonQueryProvider>
            <PokemonList />
          </PokemonQueryProvider>
        </div>
      </Page.Main>
    </Page.Root>
  )
}
