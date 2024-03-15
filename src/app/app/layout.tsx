import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <main>{children}</main>
    </div>
  )
}
