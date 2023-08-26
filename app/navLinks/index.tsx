'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type INavLinksProps = {
  navLinks: NavLink[]
}

const NavLinks: React.FC<INavLinksProps> = ({ navLinks }) => {
  const pathname = usePathname()

  return (
    <ul className="flex gap-x-5">
      {navLinks.map(({ title, href }: NavLink) => {
        const isActive = pathname === href
        const active = isActive ? 'text-white' : ''
        const link = `uppercase hover:text-white hover:transition-all duration-500 ease-linear`
        return (
          <Link className={`${active} ${link}`} key={title} href={href}>
            {title}
          </Link>
        )
      })}
    </ul>
  )
}

export default NavLinks
