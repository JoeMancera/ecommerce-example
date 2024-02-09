import type { ButtonSize, ButtonStyleType } from './button.types'

/**
 * @description Size classes of the button on UI Interface
 * @enum {string} ButtonSize
 */
export const sizeClasses: Record<ButtonSize, string> = {
  normal: 'px-8 py-3 text-base',
  small: 'px-4 py-2 text-sm',
  large: 'px-14 py-3 text-lg'
}

export const typeClasses: Record<ButtonStyleType, string> = {
  primary: 'bg-white text-black hover:bg-gray hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600',
  secondary: 'bg-black text-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600',
  link: 'bg-transparent text-white underline rounded-none p-0 hover:text-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white active:underline-none active:ring-0 active:ring-offset-0 active:ring-transparent'
}
