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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Optional: Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <header className="font-fira bg-navy text-light-slate fixed w-full z-50">
      <div className="w-full px-6 lg:px-12 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-green text-xl font-bold border-3 px-1 border-green">
          L
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-6">
          {navItems.map(({ number, label, href }) => (
            <HashLink
              to={href}
              smooth
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
    
            className="border border-green text-green rounded px-4 py-2 text-[13px] leading-[17px]"
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

      {/* Mobile Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-navy text-lightest-slate z-40 w-1/2 max-w-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
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
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

export default Navbar
