'use client'

import { cn } from '@/lib/utils'
import { GenericListProps } from './types'

export function ListItemThumb({ className, children }: GenericListProps) {
  return <div className={cn(['', className])}>{children}</div>
}
