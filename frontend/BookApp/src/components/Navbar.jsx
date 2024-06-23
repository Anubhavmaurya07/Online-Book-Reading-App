import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // toggle Menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setIsSticky(true)
            else setIsSticky(false)
        }
        window.addEventListener('scroll', handleScroll)
        return (() => {
            window.addEventListener('scroll', handleScroll)
        })
    }, [])

    const navItems = [
        { link : 'Home', path : '/'},
        { link : 'About', path : '/about'},
        { link : 'Shop', path : '/shop'},
        { link : 'Sell Your Book', path : '/admin/dashboard/'},
    ]
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-transparent transition-all ease-in duration-300 z-10">
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''}`}>
            <div className="flex items-center justify-between text-base gap-8">

                {/* Logo */}
                <Link to='/' className="text-2xl text-blue-700 flex items-center gap-2 font-bold"><FaBook className="inline-block"/>Books</Link>

                {/* Nav items for large devices */}
                <ul className="md:flex items-center space-x-11 hidden">
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className="uppercase text-base text-black cursor-pointer hover:text-blue-700 block">{link}</Link>)
                    }
                </ul>

                {/* button for large devices */}
                <div className="space-x-12 hidden lg:flex items-center">
                    <button className="w-5 hover:text-blue-700"><FaBarsStaggered /></button>
                </div>

                {/* menu button for mobile devices */}
                <div className="md:hidden ">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {
                            isMenuOpen ? <FaXmark className="h-4 w-5 text-black"/> : <FaBarsStaggered className="h-4 w-5 text-black"/>
                        }
                    </button>
                </div>
            </div>
            {/* nav items for small devices */}
            <div className={`space-y-4 bg-blue-700 px-4 mt-16 py-7 ${isMenuOpen ? 'block fixed left-0 top-0 right-0' : 'hidden'}`}>
                {
                    navItems.map(({link, path}) => <Link key={path} to={path} className="uppercase text-base text-white cursor-pointer hover:text-black block">{link}</Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar