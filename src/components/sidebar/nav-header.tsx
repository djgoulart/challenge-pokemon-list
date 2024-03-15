import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarNavHeader({ className, children }: GenericSidebarProps) {
  return <header className={cn(['', className])}>{children}</header>
}
