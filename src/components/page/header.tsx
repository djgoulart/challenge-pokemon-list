import { cn } from '@/lib/utils'
import { GenericPageProps } from './types'

export function PageHeader({ className, children }: GenericPageProps) {
  return (
    <header
      className={cn([
        'flex items-center border-b border-border h-16 px-6',
        className,
      ])}
    >
      {children}
    </header>
  )
}
