import Image from 'next/image'
import Logo from '../assets/icon/logo.png'
import NavLinks from '../navLinks'
import Link from 'next/link'

type IHeaderProps = {
  navLinks: NavLink[]
}

const Header: React.FC<IHeaderProps> = ({ navLinks }) => {
  return (
    <div className=" bg-red-400 mb-5">
      <div className="flex mx-auto w-5/6 items-center py-5">
        <Link className="flex-auto" href="/">
          <Image src={Logo} width={40} height={40} alt="Logo" />
        </Link>
        <NavLinks navLinks={navLinks} />
      </div>
    </div>
  )
}

export default Header
