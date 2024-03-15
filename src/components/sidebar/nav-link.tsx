'use client'

import { cn } from '@/lib/utils'
import { GenericSidebarProps } from './types'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarNavLinkProps = GenericSidebarProps<LinkProps>

export function SidebarNavLink({
  className,
  children,
  href,
}: SidebarNavLinkProps) {
  const pathName = usePathname()

  const isActive = (path: string) => pathName === path

  return (
    <Link
      href={href}
      className={cn([
        'flex items-center text-sm px-3 py-2 rounded-md transition-all',
        'data-[active=true]:bg-secondary',
        className,
      ])}
      data-active={isActive(href.toString())}
    >
      {children}
    </Link>
  )
}
