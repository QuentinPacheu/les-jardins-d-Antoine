import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2400&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/60 to-forest-deep/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container-edge">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">
              <span className="rule-gold mr-4 align-middle" />
              Paysagiste — Maison fondée par passion
            </p>

            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              L'art du jardin,<br />
              <span className="italic text-gold">cultivé avec soin.</span>
            </h1>

            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-cream/80">
              Création, entretien et aménagement d'extérieurs d'exception.
              Chez Les Jardins d'Antoine, chaque parcelle devient une œuvre vivante,
              façonnée avec patience et savoir-faire.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="btn-gold">
                Demander un devis
              </Link>
              <Link to="/realisations" className="btn-outline">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-widest-2 text-cream/60">
            Découvrir
          </span>
          <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  )
}
