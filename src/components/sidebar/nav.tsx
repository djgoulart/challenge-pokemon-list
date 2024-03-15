import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarNav({ className, children }: GenericSidebarProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}
