'use client'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { GenericListProps } from './types'

type ListItemDescriptionProps = {
  asChild?: boolean
}

export function ListItemDescription({
  className,
  asChild = false,
  ...props
}: GenericListProps<ListItemDescriptionProps>) {
  const Comp = asChild ? Slot : 'p'
  return <Comp className={cn(['', className])} {...props} />
}
