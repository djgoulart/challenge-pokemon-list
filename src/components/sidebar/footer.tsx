import { cn } from '@/lib/utils'

type SidebarFooterProps = {
  children?: React.ReactNode
  className?: string
}

export function SidebarFooter({
  className,
  ...otherProps
}: SidebarFooterProps) {
  return (
    <footer
      className={cn(['p-6 mt-auto border-t border-border', className])}
      {...otherProps}
    />
  )
}
