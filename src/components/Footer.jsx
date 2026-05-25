import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container-edge grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <h3 className="font-display text-2xl">
            Les Jardins <span className="italic text-gold">d'Antoine</span>
          </h3>
          <p className="mt-5 font-sans text-sm leading-relaxed text-cream/70">
            Création, entretien et aménagement de jardins d'exception.
            Un savoir-faire artisanal au service de votre extérieur.
          </p>
          <span className="mt-6 inline-block rule-gold" />
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="mt-5 space-y-3 font-sans text-sm">
            {[
              { to: '/', label: 'Accueil' },
              { to: '/services', label: 'Services' },
              { to: '/realisations', label: 'Réalisations' },
              { to: '/a-propos', label: 'À propos' },
              { to: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/70 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 font-sans text-sm text-cream/70">
            <li>
              <a href="tel:0665543183" className="block text-cream transition-colors hover:text-gold">
                06 65 54 31 83
              </a>
            </li>
            <li>Devis gratuit sur demande</li>
            <li>Lun – Sam · 8h – 19h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-edge flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs uppercase tracking-widest-2 text-cream/50">
            © {new Date().getFullYear()} Les Jardins d'Antoine
          </p>
          <p className="font-sans text-xs uppercase tracking-widest-2 text-cream/50">
            Paysagiste · Création & entretien
          </p>
        </div>
      </div>
    </footer>
  )
}
