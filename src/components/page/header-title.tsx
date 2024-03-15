import { cn } from '@/lib/utils'
import { GenericPageProps } from './types'

export function PageHeaderTitle({ className, children }: GenericPageProps) {
  return (
    <h1 className={cn(['uppercase font-medium text-lg', className])}>
      {children}
    </h1>
  )
}
