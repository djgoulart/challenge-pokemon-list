
# Desafio Pokemon List - Frontend

O desafio consiste em desenvolver uma interface para listar os pokemons da API: [POKEMON API](https://pokeapi.co/).

### Is items da listagem precisam ter:
- Foto de perfil, com um fallback com as iniciais do pokemon
  - Se o nome for "bulbasaur", o fallback será a letra "B". Se for um nome composto, precisará pegar a inicial do primeiro e do segundo nome. Deverá ignorar demais nomes (Gabriel -> G, Gabriel Henrique -> GH, Gabriel Henrique Junior -> GH)
- A foto do avatar precisará ser redonda. 
- Se o fallback estiver em uso, precisa ter um background que vai alternar em cores (verde, vermelho, azul, amarelo,...)
- Nome do pokemon
- Habilidades do pokemon em formato de 'etiquetas' abaixo do nome
- A lista deverá ter um campo de busca, filtrando pelo nome.
  - A tecla de atalho "CTRL + /" ou "CMD + /" precisam gerar foco no campo de busca
  - Com o foco no input de busca, a tecla para baixo (ArrowDown) trará o foco para o primeiro pokemon

- Ao passar o mouse por cima, o pokemon terá um "foco" atribuído a ele. A partir de então, o uso do teclado (ArrowUp and ArrowDown keys) farão selecionar o próximo pokemon.


## Entregáveis do Desafio
- [Frontend ](https://github.com/djgoulart/challenge-pokemon-list)

## Solução do desafio
<img src="https://github.com/djgoulart/challenge-pokemon-list/blob/3e4eb4a1f406a08f3f2383237eca5683a39ac0f3/docs/sreen.png" width="830" alt="listagem de pokemons" />
Para a solução deste desafio foi construída uma aplicação NextJS, sem o uso de server actions para garantir uma entrega mais aproximada com os requisitos descritos na vaga.

## Stack Utilizada
- Typescript
- Next.Js
- ShadCN UI
- Tailwind CSS
- TanStack React Query
- Vitest
- React Testing Library

## Requisitos de sistema

* NodeJS 18+

## Ambiente de desenvolvimento local
* NodeJS 18+

### Passo a passo: 
- instale as dependências do projeto:
```bash
pnpm install
```

- para inicializar em modo de desenvolvimento
```bash
pnpm dev
```
- para inicializar em modo de produção:
```bash
pnpm build 
pnpm start
```
## Testes
```bash
pnpm test
```