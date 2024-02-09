import clsx from 'clsx'
import { sizeClasses, typeClasses } from './button.classes'
import { ButtonSize, ButtonStyleType } from './button.types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: ButtonSize
  typeStyle?: ButtonStyleType
}

const defaultButtonClass = 'flex items-center rounded-3xl font-medium transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50'

export function Button({ children, className, ...rest }: ButtonProps) {
  const { size = ButtonSize.NORMAL, typeStyle = ButtonStyleType.PRIMARY } = rest
  return (
    <button
      {...rest}
      className={clsx(
        defaultButtonClass,
        sizeClasses[size],
        typeClasses[typeStyle],
        className
      )}
    >
      {children}
    </button>
  )
}
