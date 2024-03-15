import { cn } from '@/lib/utils'
import { GenericPageProps } from './types'

export function PageMain({ className, children }: GenericPageProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
