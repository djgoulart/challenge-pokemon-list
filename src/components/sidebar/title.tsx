import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarTitle({ className, children }: GenericSidebarProps) {
  return <h3 className={cn(['', className])}>{children}</h3>
}
