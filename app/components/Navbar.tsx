const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent border-b text-black border-gray-300 p-5 shadow-md flex justify-around items-center">
        <div className="text-xl font-bold">Game On</div>
        <ul className="hidden md:flex space-x-6 text-black">
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
        <div>Log In</div>
    </nav>
  )
}

export default Navbar
