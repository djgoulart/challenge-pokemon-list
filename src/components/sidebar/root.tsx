import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarRoot({ className, children }: GenericSidebarProps) {
  return (
    <aside
      className={cn([
        'flex flex-col border-r border-border space-y-6',
        className,
      ])}
    >
      {children}
    </aside>
  )
}
