export default function PagePlaceholder({ eyebrow, title, lead }) {
  return (
    <section className="bg-cream pt-40 pb-32">
      <div className="container-edge max-w-3xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl text-forest md:text-6xl">{title}</h1>
        <span className="my-8 inline-block rule-gold" />
        <p className="font-sans text-lg leading-relaxed text-forest-deep/70">{lead}</p>
        <p className="mt-12 font-sans text-xs uppercase tracking-widest-2 text-forest/50">
          Cette page sera bientôt enrichie.
        </p>
      </div>
    </section>
  )
}
