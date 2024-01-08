import Link from "next/link"
/*import AuthButton from '../components/Header/AuthButton'*/

function NavLink(props: { link: string }) {
  return (
    <Link
      className="hover:bg-red-700 px-4 py-3 bg-red-900 mx-2 rounded-lg"
      href={props.link.toLowerCase()}
    >
      {props.link}
    </Link>
  )
}

function NewsFlashLogo() {
  return (
    <div>
      <Link
        href="/"
        className="font-bold text-4xl"
      >
        NewsFlash
      </Link>
    </div>
  )
}

function NavigationBar() {
  return (
    <div>
      <NavLink link="Majandus" />
      <NavLink link="Sport" />
      <NavLink link="Maailm" />
      <NavLink link="Eesti" />
      <NavLink link="Kultuur" />
      <NavLink link="Poliitika" />
      <NavLink link="Teadus" />
      
    </div>
  )
}

export default function HomeHeader() {
 

  return (
    <nav className="py-8 flex flex-wrap gap-8 items-center justify-between w-[93%] mx-auto">
      <NewsFlashLogo />
      <NavigationBar />
      <div>{/*<AuthButton />*/}</div>
    </nav>
  )
}
