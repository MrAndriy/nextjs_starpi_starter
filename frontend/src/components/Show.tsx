import { Children, PropsWithChildren, ReactElement, ReactNode } from 'react'

export const Show = ({ children }: PropsWithChildren) => {
  let when: ReactNode = null
  let otherwise: ReactNode = null

  Children.forEach(children, (child) => {
    if (child && (child as ReactElement).props.isTrue === undefined) {
      otherwise = child
    } else if (child && (child as ReactElement).props.isTrue === true) {
      when = child
    }
  })

  return when || otherwise
}

Show.When = ({ isTrue, children }: PropsWithChildren<{ isTrue: boolean }>) => isTrue && children
Show.Else = ({ children }: PropsWithChildren) => children
