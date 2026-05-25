export default function Intro() {
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="container-edge grid items-center gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">
            <span className="rule-gold mr-4 align-middle" />
            La maison
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-forest md:text-5xl">
            Un jardin se cultive<br />
            <span className="italic text-gold">comme un grand cru.</span>
          </h2>
        </div>

        <div className="md:col-span-7 md:pl-12">
          <p className="font-sans text-lg leading-relaxed text-forest-deep/80">
            Depuis plus de quinze ans, Antoine et son équipe façonnent des extérieurs
            sur-mesure pour une clientèle exigeante. Du dessin du plan jusqu'à l'entretien
            saisonnier, nous mettons un point d'honneur à respecter le rythme de la nature
            et la singularité de chaque lieu.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-forest-deep/80">
            Notre conviction : un beau jardin n'est jamais figé. Il se compose, se taille,
            se patine et grandit — à condition d'être confié à des mains qui le comprennent.
          </p>

          <div className="mt-10 flex items-center gap-8 border-l-2 border-gold pl-6">
            <div>
              <p className="font-display text-4xl text-forest">15+</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest-2 text-forest/60">
                années d'expérience
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-forest">200+</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest-2 text-forest/60">
                jardins façonnés
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
