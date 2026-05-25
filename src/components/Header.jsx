import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-forest-deep shadow-[0_1px_0_rgba(201,168,76,0.15)]">
      <div className="container-edge flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-wide text-cream">
            Les Jardins <span className="italic text-gold">d'Antoine</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative font-sans text-xs uppercase tracking-widest-2 transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:0665543183"
          className="hidden items-center gap-2 border border-gold/60 px-4 py-2 font-sans text-xs uppercase tracking-widest-2 text-gold transition-colors duration-300 hover:bg-gold hover:text-forest-deep lg:inline-flex"
        >
          06 65 54 31 83
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className={`h-px w-6 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-forest-deep transition-[max-height] duration-500 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="container-edge flex flex-col gap-5 py-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-2xl ${isActive ? 'text-gold' : 'text-cream'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:0665543183"
            className="mt-4 self-start border border-gold/60 px-4 py-2 font-sans text-xs uppercase tracking-widest-2 text-gold"
          >
            06 65 54 31 83
          </a>
        </nav>
      </div>
    </header>
  )
}
