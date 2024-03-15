import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarNavMain({ className, children }: GenericSidebarProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}
