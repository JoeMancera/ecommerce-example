'use client'
import {
  ShoppingBagIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Favorites',
    href: '/Favorites',
    icon: HeartIcon
  },
  { name: 'Cart', href: '/cart', icon: ShoppingBagIcon }
]

export function OptionLinks() {
  const pathname = usePathname()
  return (
    <nav className='flex gap-5'>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex flex-col items-center justify-center gap text-sm font-medium hover:underline hover:text-gray ${pathname === link.href ? 'text-grey underline' : ''}`}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        )
      })}
    </nav>
  )
}
