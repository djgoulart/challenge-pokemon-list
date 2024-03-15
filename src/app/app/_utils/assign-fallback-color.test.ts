import { describe, it, expect, beforeEach, vi } from 'vitest'
import { assignAcronymAndFallbackColor } from './assign-fallback-color'
import * as acronymModule from './generate-acronym'

vi.mock('./generate-acronym', () => ({
  generateAcronym: vi.fn(),
}))

describe('assignAcronymAndFallbackColor', () => {
  const mockGenerateAcronym = acronymModule.generateAcronym as vi.Mock

  beforeEach(() => {
    mockGenerateAcronym.mockClear()
  })

  it('should assign acronyms and unique fallback colors to each Pokemon', () => {
    // Mocking acronyms to be different for each Pokémon
    mockGenerateAcronym
      .mockReturnValueOnce('B')
      .mockReturnValueOnce('I')
      .mockReturnValueOnce('V')

    const pokemonData = [
      { name: 'Bulbasaur', url: 'url1' },
      { name: 'Ivysaur', url: 'url2' },
      { name: 'Venusaur', url: 'url3' },
    ]

    const result = assignAcronymAndFallbackColor(pokemonData)

    // Verifica se as cores atribuídas estão de acordo com a sequência esperada
    expect(result[0].acronym).toBe('B')
    expect(result[0].colorClass).toBe('bg-red-300')
    expect(result[1].acronym).toBe('I')
    expect(result[1].colorClass).toBe('bg-green-300')
    expect(result[2].acronym).toBe('V')
    expect(result[2].colorClass).toBe('bg-blue-300')
  })

  it('should not assign the same color to consecutive Pokemons with the same acronym', () => {
    mockGenerateAcronym.mockReturnValueOnce('PI').mockReturnValueOnce('PI')

    const pokemonData = [
      { name: 'Pikachu', url: 'url1' },
      { name: 'Pidgeotto', url: 'url2' },
    ]

    const result = assignAcronymAndFallbackColor(pokemonData)

    expect(result[0].acronym).toBe('PI')
    expect(result[0].colorClass).toBe('bg-red-300')
    expect(result[1].acronym).toBe('PI')
    expect(result[1].colorClass).toBe('bg-green-300') // Assumes the next available color is used
  })

  it('should recycle colors if all have been used for a given acronym', () => {
    mockGenerateAcronym.mockReturnValue('RE')

    const pokemonData = new Array(11).fill({ name: 'Repeat', url: 'url' })

    const result = assignAcronymAndFallbackColor(pokemonData)

    expect(result[0].acronym).toBe('RE')
    expect(result[0].colorClass).toBe('bg-red-300')
    expect(result[10].acronym).toBe('RE')
    expect(result[10].colorClass).toBe('bg-red-300')
  })
})
