// vitest-dom.d.ts
import '@testing-library/jest-dom'

declare module 'vitest' {
  export interface Assertion {
    toBeInTheDocument(): Assertion
    toHaveAttribute(attr: string, value?: any): Assertion
    // Adicione mais matchers conforme necessário
  }
}
