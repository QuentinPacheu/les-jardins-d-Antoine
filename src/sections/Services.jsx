import { Link } from 'react-router-dom'

const SERVICES = [
  {
    number: '01',
    title: 'Création de jardins',
    description:
      "Conception sur-mesure, plantation et mise en scène végétale pour donner vie à des extérieurs singuliers, pensés pour durer.",
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    number: '02',
    title: 'Entretien & taille',
    description:
      "Suivi régulier, taille raisonnée, soins des massifs et des pelouses. Un jardin maintenu dans sa plus belle expression, toute l'année.",
    image:
      'https://images.unsplash.com/photo-1599629954294-14df9ec8bc03?auto=format&fit=crop&w=1400&q=80'
  },
  {
    number: '03',
    title: 'Maçonnerie paysagère',
    description:
      "Terrasses en pierre naturelle, murets, allées et bassins. La structure d'un jardin se dessine aussi dans le minéral.",
    image:
      'https://images.unsplash.com/photo-1558904541-c19784525cf4?auto=format&fit=crop&w=1400&q=80'
  },
  {
    number: '04',
    title: 'Élagage & abattage',
    description:
      "Interventions sécurisées sur arbres de grande hauteur, taille de formation et démontage maîtrisé par des grimpeurs qualifiés.",
    image:
      'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1400&q=80'
  }
]

export default function Services() {
  return (
    <section className="bg-forest-deep py-28 text-cream md:py-36">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="rule-gold mr-4 align-middle" />
            Nos prestations
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Quatre savoir-faire,<br />
            <span className="italic text-gold">une seule exigence.</span>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-cream/70">
            De la première esquisse jusqu'à la dernière taille de saison, nous accompagnons
            votre extérieur sur toute sa vie.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-cream/10 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden bg-forest-deep transition-colors duration-500 hover:bg-forest"
            >
              <div className="grid md:grid-cols-5">
                <div className="relative aspect-[4/3] overflow-hidden md:col-span-2 md:aspect-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-forest-deep/30" />
                </div>

                <div className="flex flex-col justify-between p-8 md:col-span-3 md:p-10">
                  <div>
                    <p className="font-display text-sm tracking-widest-2 text-gold">
                      {service.number}
                    </p>
                    <h3 className="mt-4 font-display text-2xl text-cream md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-cream/70">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 font-sans text-xs uppercase tracking-widest-2 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    En savoir plus
                    <span className="h-px w-8 bg-gold" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/services" className="btn-outline">
            Découvrir toutes nos prestations
          </Link>
        </div>
      </div>
    </section>
  )
}
