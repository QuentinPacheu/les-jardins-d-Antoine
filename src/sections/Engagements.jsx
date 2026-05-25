const ENGAGEMENTS = [
  {
    title: 'Le sur-mesure',
    body:
      "Aucun jardin ne ressemble à un autre. Chaque projet commence par une visite, une écoute, et un plan dessiné à la main."
  },
  {
    title: "Le végétal d'abord",
    body:
      "Essences locales, sols vivants, gestion raisonnée de l'eau. Nous travaillons avec la nature, pas contre elle."
  },
  {
    title: 'Une équipe stable',
    body:
      "Les mêmes visages, saison après saison. Nos compagnons connaissent vos plantes mieux que personne."
  },
  {
    title: 'Le suivi long terme',
    body:
      "Un jardin se patine. Nous accompagnons sa croissance pendant 5, 10, 20 ans — sans rupture de soin."
  }
]

export default function Engagements() {
  return (
    <section className="relative bg-cream py-28 md:py-36">
      <div className="container-edge">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">
              <span className="rule-gold mr-4 align-middle" />
              Nos engagements
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-forest md:text-5xl">
              Une certaine idée<br />
              <span className="italic text-gold">du métier.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans text-base leading-relaxed text-forest-deep/70">
              Quatre principes guident chacune de nos interventions. Ils n'ont pas changé
              depuis le premier jour, et ne changeront pas.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-forest/10 md:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.map((item, idx) => (
            <article
              key={item.title}
              className="group bg-cream p-10 transition-colors duration-500 hover:bg-forest-deep"
            >
              <p className="font-display text-sm tracking-widest-2 text-gold">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <span className="mt-6 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16" />
              <h3 className="mt-6 font-display text-2xl text-forest transition-colors duration-500 group-hover:text-cream">
                {item.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-forest-deep/70 transition-colors duration-500 group-hover:text-cream/70">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
