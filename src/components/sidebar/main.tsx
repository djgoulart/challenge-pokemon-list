import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'

export function SidebarMain({ className, children }: GenericSidebarProps) {
  return (
    <main className={cn(['px-3', className])}>
      <>{children}</>
    </main>
  )
}
