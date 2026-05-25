import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=2400&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-forest-deep/60" />

      <div className="relative container-edge py-28 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">
              <span className="rule-gold mr-4 align-middle" />
              Parlons de votre projet
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Donnons forme<br />
              <span className="italic text-gold">à votre jardin.</span>
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-cream/70">
              Visite des lieux, écoute de vos envies, devis détaillé. Le premier rendez-vous
              est offert — qu'il s'agisse d'une création complète ou d'un simple entretien.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border border-gold/40 p-10">
              <p className="font-sans text-xs uppercase tracking-widest-2 text-gold">
                Appelez-nous directement
              </p>
              <a
                href="tel:0665543183"
                className="mt-4 block font-display text-4xl text-cream transition-colors hover:text-gold md:text-5xl"
              >
                06 65 54 31 83
              </a>
              <span className="mt-6 block h-px w-full bg-cream/15" />
              <p className="mt-6 font-sans text-sm leading-relaxed text-cream/70">
                Du lundi au samedi, de 8h à 19h. Réponse sous 24h.
              </p>
              <Link to="/contact" className="btn-gold mt-8 w-full">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
