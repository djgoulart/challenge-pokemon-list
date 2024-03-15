export function generateAcronym(name: string) {
  const words = name.match(/\b(?!(de|da|dos|das)\b)\w+/gi) || []

  return words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}
