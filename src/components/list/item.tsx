'use client'

import { cn } from '@/lib/utils'
import { GenericListProps } from './types'

export function ListItem({ className, children }: GenericListProps) {
  return <div className={cn(['', className])}>{children}</div>
}
