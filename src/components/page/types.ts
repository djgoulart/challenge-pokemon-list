export type GenericPageProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T
