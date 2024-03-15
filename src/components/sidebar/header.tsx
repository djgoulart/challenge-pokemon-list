import { cn } from '@/lib/utils'

type SidebarHeaderProps = {
  children?: React.ReactNode
  className?: string
}

export function SidebarHeader({
  className,
  ...otherProps
}: SidebarHeaderProps) {
  return (
    <header
      className={cn(['px-6 py-3 border-b border-border', className])}
      {...otherProps}
    />
  )
}
