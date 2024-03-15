'use client'

import { cn } from '@/lib/utils'
import { GenericListProps } from './types'

export function ListItemTitle({ className, children }: GenericListProps) {
  return <h3 className={cn(['', className])}>{children}</h3>
}
