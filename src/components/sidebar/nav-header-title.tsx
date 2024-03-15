import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarNavHeaderTitle({
  className,
  children,
}: GenericSidebarProps) {
  return (
    <h4
      className={cn([
        'text-xs uppercase text-muted-foreground ml-3',
        className,
      ])}
    >
      {children}
    </h4>
  )
}
