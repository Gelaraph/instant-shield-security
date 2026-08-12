import { Reveal } from "./reveal";

export function LegalBody({
  sections,
}: {
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="container-x">
      <div className="max-w-3xl space-y-10">
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={(i % 3) * 70}>
            <article className="border-l-2 border-border pl-6 transition-colors hover:border-gold">
              <h2 className="text-lg font-bold text-navy">{s.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
        <p className="text-xs uppercase tracking-[0.2em] text-slate">
          Last updated — {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
