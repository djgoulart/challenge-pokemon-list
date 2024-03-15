import { cn } from '@/lib/utils'
import { GenericPageProps } from './types'

export function PageHeaderNav({ className, children }: GenericPageProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}
