import { useState } from 'react'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
]

export function Footer() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed bottom-0 left-0 z-50 w-full border-b border-black/10 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <a href="/" className="text-lg font-bold">
                    MyApp
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {navItems.map(item => (
                        <a key={item.href} href={item.href} className="hover:opacity-70">
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Burger */}
                <button
                    className="relative z-50 flex h-10 w-10 flex-col items-center justify-center md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
          <span
              className={`h-0.5 w-6 bg-black transition ${
                  menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
          />
                    <span
                        className={`my-1 h-0.5 w-6 bg-black transition ${
                            menuOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-black transition ${
                            menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                        }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex h-full flex-col items-center justify-center gap-8 text-lg font-medium">
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
