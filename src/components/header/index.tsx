'use client'
import { OptionLinks } from '../nav'

export function Header() {
  return (
    <header className='container mx-auto py-3'>
      <div className="flex justify-between">
        <input type='search' className='bg-gray rounded-md py-2 px-4' />
        <OptionLinks />
      </div>
    </header>
  )
}
