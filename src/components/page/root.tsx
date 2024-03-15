import { cn } from '@/lib/utils'
import { GenericPageProps } from './types'

export function PageRoot({ className, children }: GenericPageProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}
