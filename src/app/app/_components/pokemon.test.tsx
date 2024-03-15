import '@testing-library/jest-dom'
import { describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pokemon } from './pokemon'

const mockPokemon = {
  id: 1,
  name: 'Bulbasaur',
  sprites: {
    front_default: 'https://example.com/bulbasaur.png',
  },
  abilities: [
    { ability: { name: 'Overgrow', url: '' }, is_hidden: false, slot: 1 },
    { ability: { name: 'Chlorophyll', url: '' }, is_hidden: true, slot: 3 },
  ],
  colorClass: 'bg-green-300',
  acronym: 'BU',
}

describe('Pokemon', () => {
  test('renders the Pokemon name', () => {
    render(<Pokemon pokemon={mockPokemon} />)
    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument()
  })

  test('does not render the Pokemon image when disableImage is true', () => {
    render(<Pokemon pokemon={mockPokemon} disableImage={true} />)
    expect(screen.queryByRole('img', { name: mockPokemon.name })).toBeNull()
    expect(screen.getByText(mockPokemon.acronym)).toBeInTheDocument()
  })

  test('renders the Pokemon abilities', () => {
    render(<Pokemon pokemon={mockPokemon} />)
    mockPokemon.abilities.forEach((ability) => {
      expect(screen.getByText(ability.ability.name)).toBeInTheDocument()
    })
  })
})
