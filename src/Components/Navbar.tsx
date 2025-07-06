import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
// @ts-ignore
import { HashLink } from 'react-router-hash-link'

const navItems = [
  { number: '01.', label: 'About', href: '#about' },
  { number: '02.', label: 'Experience', href: '#experience' },
  { number: '03.', label: 'Project', href: '#project' },
  { number: '04.', label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)
  const [isShrunk, setIsShrunk] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsShrunk(currentScrollY > 10)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false) // scroll down
      } else {
        setShowNavbar(true) // scroll up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      {/* Main Header Bar */}
      <header
        className={`font-fira fixed w-full z-40 transition-all duration-300 ease-in-out ${
          showNavbar ? 'top-0' : '-top-[100px]'
        } ${isShrunk ? 'bg-navy/70 backdrop-blur-md shadow-md' : 'bg-navy'}`}
      >
        <div
          className={`w-full px-6 lg:px-12 transition-all duration-300 ease-in-out ${
            isShrunk ? 'h-[80px]' : 'h-[100px]'
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <a
            href="/"
            className="text-green text-xl font-bold border-3 px-1 border-green"
          >
            L
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-x-8">
            {navItems.map(({ number, label, href }) => (
              <HashLink
                key={label}
                to={href}
                smooth
                onClick={closeMenu}
                className="text-[13px] text-lightest-slate flex items-center gap-1 hover:text-[#64ffda] transition duration-600 ease-in-out"
              >
                <span className="text-green">{number}</span>
                <span>{label}</span>
              </HashLink>
            ))}
            <a
              href="../assets/cv.pdf"
              download
              className="inline-flex items-center justify-center border border-green text-green rounded px-4 py-[10px] text-[14px] leading-[17px] font-mono transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0_#64ffda]"
            >
              Resume
            </a>
          </nav>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-green"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </header>

      {/* Mobile Right Drawer (Outside header to avoid transparency) */}
      <div
        className={`fixed top-0 right-0 h-full bg-navy text-lightest-slate z-50 w-3/4 max-w-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6 mt-20">
          {navItems.map(({ number, label, href }) => (
            <HashLink
              key={label}
              to={href}
              onClick={closeMenu}
              className="text-[14px] text-lightest-slate flex items-center gap-2"
            >
              <span className="text-green">{number}</span>
              <span>{label}</span>
            </HashLink>
          ))}
          <a
            href="../assets/cv.pdf"
            download={true}
            className="mt-4 border border-green rounded px-4 py-2 text-center text-sm text-green"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Overlay to close drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Navbar
