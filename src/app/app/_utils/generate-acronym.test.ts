import { describe, it, expect } from 'vitest'
import { generateAcronym } from './generate-acronym'

describe('generateAcronym', () => {
  it('should return the first letter of a single word in uppercase', () => {
    expect(generateAcronym('bulbasaur')).toBe('B')
  })

  it('should return the first letters of the first two words in uppercase', () => {
    expect(generateAcronym('Gabriel Henrique')).toBe('GH')
  })

  it('should ignore words like "de", "da", "dos", "das"', () => {
    expect(generateAcronym('Jose da Silva')).toBe('JS')
    expect(generateAcronym('Carlos dos Santos')).toBe('CS')
  })

  it('should handle empty strings', () => {
    expect(generateAcronym('')).toBe('')
  })

  it('should handle names containing only prepositions/articles', () => {
    expect(generateAcronym('de da dos das')).toBe('')
  })

  it('should handle mixed case input', () => {
    expect(generateAcronym('gAbRiEl hEnRiQuE')).toBe('GH')
  })
})
