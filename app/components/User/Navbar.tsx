import { Link } from "@remix-run/react"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/50 text-white p-5 flex justify-around items-center fixed top-0 w-full z-50 backdrop:blur-md">
        <div className="text-xl font-bold">Game On</div>
        <ul className="hidden md:flex space-x-6 text-white">
            <li>
                <a href="/" className="hover:underline">
                Home 
                </a>
            </li>
            <li>
                <a href="/about" className="hover:underline">
                Fixtures
                </a>
            </li>
            <li>
                <a href="/contact" className="hover:underline">
                Reviews
                </a>
            </li>
            <li>
                <a href="/" className="hover:underline">
                Search 
                </a>
            </li>
        </ul>
        <Link to={'/login'}>Log In</Link>
    </nav>
  )
}

export default Navbar
