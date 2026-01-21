"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { useState } from "react";

export default function Home() {
  const [locale, setLocale] = useState<"en" | "bs">("en");
  const t = (en: string, bs: string) => (locale === "bs" ? bs : en);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16 sm:pt-20">
        <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
          <Container className="flex items-center justify-between gap-4 py-3">
            <div className="text-sm font-semibold tracking-tight">
              XSG <span className="text-muted">Engineering & QA</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted">
              <div className="hidden items-center gap-4 sm:flex">
                <a
                  className="transition-colors hover:text-foreground"
                  href="#what-we-do"
                >
                  {t("Services", "Usluge")}
                </a>
                <a
                  className="transition-colors hover:text-foreground"
                  href="#how-we-work"
                >
                  {t("Engagement", "Saradnja")}
                </a>
                <a
                  className="transition-colors hover:text-foreground"
                  href="#industries"
                >
                  {t("Experience", "Iskustvo")}
                </a>
              </div>
              <div className="flex items-center rounded-full border border-border bg-surface/60 px-2 py-1 text-[11px] font-semibold text-foreground sm:text-xs">
                <button
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    locale === "en"
                      ? "bg-foreground text-background"
                      : "hover:text-foreground"
                  }`}
                  type="button"
                  onClick={() => setLocale("en")}
                  aria-pressed={locale === "en"}
                >
                  EN
                </button>
                <button
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    locale === "bs"
                      ? "bg-foreground text-background"
                      : "hover:text-foreground"
                  }`}
                  type="button"
                  onClick={() => setLocale("bs")}
                  aria-pressed={locale === "bs"}
                >
                  BS
                </button>
              </div>
            </div>
          </Container>
        </header>

        {/* 1. HERO SECTION */}
        <Section
          id="top"
          className="relative overflow-hidden border-b border-border"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent)]" />
          <Container className="relative">
            <div className="grid gap-12 pb-6 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="max-w-3xl text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {t(
                    "Dedicated Engineering & QA Teams for Mission-Critical Software",
                    "Posvećeni inženjerski i QA timovi za kritične softverske sisteme"
                  )}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                  {t(
                    "We provide experienced software engineers and QA professionals on an hourly basis, helping international companies build, test, and scale reliable digital products.",
                    "Obezbjeđujemo iskusne softverske inženjere i QA stručnjake na satnoj osnovi, pomažući međunarodnim kompanijama da grade, testiraju i skaliraju pouzdane digitalne proizvode."
                  )}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="#conversation" variant="primary">
                    {t("Start a conversation", "Započnite razgovor")}
                  </Button>
                  <Button href="#project-brief" variant="secondary">
                    {t("Tell us about your project", "Recite nam o vašem projektu")}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-border bg-surface/70 p-6 shadow-[var(--shadow-card)]">
                  <div className="text-sm font-medium">
                    {t("Operational fit", "Operativno uklapanje")}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>{t("EU & US time zones", "EU i US vremenske zone")}</li>
                    <li>{t("Clear documentation and reporting", "Jasna dokumentacija i izvještavanje")}</li>
                    <li>{t("Senior-level delivery focus", "Fokus na isporuku senior nivoa")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. TRUST SIGNAL SECTION */}
        <Section id="trust">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  {t("Trusted delivery for complex systems", "Pouzdana isporuka za složene sisteme")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(
                    "We operate with an enterprise mindset: measured scope, quality controls, and predictable execution.",
                    "Radimo s enterprise pristupom: odmjeren obim, kontrole kvaliteta i predvidiva realizacija."
                  )}
                </p>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    t(
                      "Experience on large-scale systems used by millions of users",
                      "Iskustvo na velikim sistemima koje koriste milioni korisnika"
                    ),
                    t(
                      "Long-term partnerships with international companies",
                      "Dugoročna partnerstva s međunarodnim kompanijama"
                    ),
                    t(
                      "Proven delivery in high-availability and regulated environments",
                      "Dokazana isporuka u visokodostupnim i regulisanim okruženjima"
                    ),
                    t("Teams aligned with EU & US time zones", "Timovi usklađeni s EU i US vremenskim zonama"),
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border bg-surface/60 p-5 text-sm leading-relaxed shadow-[var(--shadow-card)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. WHAT WE DO */}
        <Section id="what-we-do" className="border-y border-border bg-surface/30">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("Software Engineering & Quality Assurance, Done Right", "Softverski inženjering i QA, kako treba")}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {t(
                "We provide dedicated professionals who integrate with your team, follow your standards, and deliver work that holds up in production and audit-ready environments.",
                "Obezbjeđujemo posvećene profesionalce koji se integrišu u vaš tim, prate vaše standarde i isporučuju rad koji traje u produkciji i spreman je za reviziju."
              )}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: t("Web & backend development", "Web i backend razvoj"),
                  desc: t(
                    "Practical architecture, maintainable codebases, and predictable releases.",
                    "Praktična arhitektura, održivi kodni temelji i predvidiva izdanja."
                  ),
                },
                {
                  title: t("Mobile application development", "Razvoj mobilnih aplikacija"),
                  desc: t(
                    "Cross-platform or native delivery focused on reliability and supportability.",
                    "Isporuka za više platformi ili native, fokus na pouzdanost i održavanje."
                  ),
                },
                {
                  title: t("Manual & automated testing", "Manualno i automatizovano testiranje"),
                  desc: t(
                    "Coverage where it matters: regressions, critical flows, and edge cases.",
                    "Pokrivenost gdje je najvažnije: regresije, kritični tokovi i rubni slučajevi."
                  ),
                },
                {
                  title: t("Test strategy & quality processes", "Strategija testiranja i procesi kvaliteta"),
                  desc: t(
                    "Clear test plans, defect triage, and quality gates aligned to risk.",
                    "Jasni planovi testiranja, trijaža defekata i kontrolne tačke usklađene s rizikom."
                  ),
                },
                {
                  title: t("Long-term team augmentation", "Dugoročno proširenje tima"),
                  desc: t(
                    "Dedicated engineers or QA specialists embedded in your workflows.",
                    "Posvećeni inženjeri ili QA stručnjaci uključeni u vaše procese."
                  ),
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-background/45 p-6 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-base font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 4. HOW WE WORK */}
        <Section id="how-we-work">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("A Simple, Transparent Engagement Model", "Jednostavan, transparentan model saradnje")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {t(
                    "You get dedicated capacity with clear scope boundaries, measurable output, and hourly billing aligned to the work performed.",
                    "Dobijate posvećen kapacitet s jasnim granicama obima, mjerljivim rezultatima i satnicom usklađenom s obavljenim radom."
                  )}
                </p>
              </div>
              <ol className="lg:col-span-7 space-y-4">
                {[
                  t("Understanding project and requirements", "Razumijevanje projekta i zahtjeva"),
                  t("Matching dedicated engineers or QA specialists", "Uparivanje posvećenih inženjera ili QA stručnjaka"),
                  t("Hourly billing with full transparency", "Satnica s potpunom transparentnošću"),
                  t("Long-term collaboration and integration into client workflows", "Dugoročna saradnja i integracija u procese klijenta"),
                ].map((step, idx) => (
                  <li
                    key={step}
                    className="rounded-2xl border border-border bg-surface/60 p-6 shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background/40 text-sm font-semibold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight">
                          {step}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {idx === 0 &&
                            t(
                              "We align on objectives, constraints, dependencies, and delivery expectations.",
                              "Usklađujemo ciljeve, ograničenja, zavisnosti i očekivanja isporuke."
                            )}
                          {idx === 1 &&
                            t(
                              "We propose profiles that match your technical stack and operating model.",
                              "Predlažemo profile koji odgovaraju vašem tech stacku i operativnom modelu."
                            )}
                          {idx === 2 &&
                            t(
                              "You receive time tracking and work summaries for full accountability.",
                              "Dobijate praćenje vremena i sažetke rada radi potpune odgovornosti."
                            )}
                          {idx === 3 &&
                            t(
                              "We integrate into your tooling and cadence for consistent execution.",
                              "Integriramo se u vaše alate i ritam rada radi dosljedne realizacije."
                            )}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        {/* 5. INDUSTRIES & EXPERIENCE */}
        <Section id="industries" className="border-y border-border bg-surface/30">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("Built for Complex, High-Responsibility Systems", "Prilagođeni složenim, odgovornim sistemima")}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {t(
                "We contribute to products where correctness, uptime, and security are non-negotiable—without disrupting existing teams or processes.",
                "Doprinosimo proizvodima gdje su ispravnost, dostupnost i sigurnost neupitni—bez ometanja postojećih timova ili procesa."
              )}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                t("Aviation & transportation", "Aviacija i transport"),
                t("Fintech & financial platforms", "Fintech i finansijske platforme"),
                t("Real estate & data-heavy systems", "Nekretnine i data-intenzivni sistemi"),
                t("Enterprise web & mobile products", "Enterprise web i mobilni proizvodi"),
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-border bg-background/45 p-6 text-sm font-medium tracking-tight shadow-[var(--shadow-card)]"
                >
                  {industry}
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 6. WHY XSG */}
        <Section id="why-xsg">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("A Reliable Technical Partner — Not Just Another Vendor", "Pouzdan tehnički partner — ne samo još jedan dobavljač")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {t(
                    "We prioritize delivery quality, consistent communication, and the operational discipline needed for enterprise environments.",
                    "Prioritet nam je kvalitet isporuke, dosljedna komunikacija i operativna disciplina potrebna u enterprise okruženju."
                  )}
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    t("Senior-level engineers & QA specialists", "Senior inženjeri i QA stručnjaci"),
                    t("Clear communication and documentation", "Jasna komunikacija i dokumentacija"),
                    t("Focus on stability, scalability, and security", "Fokus na stabilnost, skalabilnost i sigurnost"),
                    t("Experience working within large organizations", "Iskustvo rada u velikim organizacijama"),
                    t("Flexible team scaling", "Fleksibilno skaliranje timova"),
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border bg-surface/60 p-6 text-sm leading-relaxed shadow-[var(--shadow-card)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* 6b. WORDS FROM OUR CEO */}
        <Section id="leadership" className="border-t border-border bg-surface/20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/60 text-lg font-semibold text-foreground shadow-[var(--shadow-card)]">
                    CEO
                  </div>
                  <div>
                    <p className="text-sm text-muted">{t("Words from our CEO", "Riječi našeg CEO-a")}</p>
                    <p className="text-base font-semibold tracking-tight">
                      {t("Leadership message", "Poruka rukovodstva")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-3xl border border-border bg-background/45 p-8 shadow-[var(--shadow-card)]">
                  <p className="text-lg leading-relaxed">
                    {t(
                      "We exist to help teams ship reliable software with discipline and clarity. Our engineers and QA specialists integrate into your workflow, bring a calm, methodical approach, and keep quality high without slowing delivery.",
                      "Postojimo da pomognemo timovima da isporučuju pouzdan softver s disciplinom i jasnoćom. Naši inženjeri i QA stručnjaci uklapaju se u vaš tok rada, donose smiren, metodičan pristup i održavaju visok kvalitet bez usporavanja isporuke."
                    )}
                  </p>
                  <div className="mt-4 text-sm text-muted">
                    {t("— CEO, XSG", "— CEO, XSG")}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 6c. CLIENT PRAISE */}
        <Section id="testimonials" className="border-y border-border bg-surface/30">
          <Container>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("What our clients appreciate", "Šta naši klijenti cijene")}
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-muted">
                {t(
                  "Straightforward collaboration, predictable delivery, and a focus on stability in production.",
                  "Jasna saradnja, predvidiva isporuka i fokus na stabilnost u produkciji."
                )}
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: t(
                    "They integrated quickly, improved our test coverage, and reduced incidents in production.",
                    "Brzo su se uklopili, povećali pokrivenost testovima i smanjili incidente u produkciji."
                  ),
                  role: t("Director of Engineering, Fintech", "Direktor inženjeringa, Fintech"),
                },
                {
                  quote: t(
                    "Clear reporting and accountable hourly billing—no surprises, just steady delivery.",
                    "Jasni izvještaji i transparentna satnica—bez iznenađenja, samo stabilna isporuka."
                  ),
                  role: t("VP Product, Enterprise SaaS", "VP proizvoda, Enterprise SaaS"),
                },
                {
                  quote: t(
                    "QA discipline and documentation helped us pass external audits without extra rework.",
                    "QA disciplina i dokumentacija pomogle su nam da prođemo eksterne revizije bez dodatnog rada."
                  ),
                  role: t("CTO, Regulated Industry", "CTO, regulisana industrija"),
                },
              ].map((item) => (
                <div
                  key={item.quote}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background/45 p-6 shadow-[var(--shadow-card)]"
                >
                  <p className="text-sm leading-relaxed text-foreground/90">“{item.quote}”</p>
                  <div className="mt-4 text-xs font-medium text-muted">{item.role}</div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 7. ENGAGEMENT MODEL */}
        <Section id="engagement-model" className="border-y border-border bg-surface/30">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("Flexible Hourly Collaboration", "Fleksibilna saradnja na satnici")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {t(
                    "Hourly billing with dedicated professionals—engage for short delivery spikes or long-term delivery lanes. Scale capacity up or down as priorities change, with transparent reporting and predictable communication.",
                    "Satnica s posvećenim profesionalcima—uključite nas za kratke isporuke ili dugoročne tokove. Skalirajte kapacitet prema prioritetima, uz transparentno izvještavanje i predvidivu komunikaciju."
                  )}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-border bg-background/45 p-7 shadow-[var(--shadow-card)]">
                  <h3 className="text-base font-semibold tracking-tight">
                    {t("What you can expect", "Šta možete očekivati")}
                  </h3>
                  <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium">
                        {t("Dedicated capacity", "Posvećen kapacitet")}
                      </dt>
                      <dd className="mt-1 text-sm text-muted">
                        {t(
                          "Named engineers/QA specialists aligned to your stack and cadence.",
                          "Imenovani inženjeri/QA stručnjaci usklađeni s vašim stackom i ritmom rada."
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium">
                        {t("Transparent billing", "Transparentno fakturisanje")}
                      </dt>
                      <dd className="mt-1 text-sm text-muted">
                        {t(
                          "Hourly reporting with clear summaries of delivered work.",
                          "Satno izvještavanje s jasnim sažecima obavljenog rada."
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium">
                        {t("Scalable teams", "Skalabilni timovi")}
                      </dt>
                      <dd className="mt-1 text-sm text-muted">
                        {t(
                          "Add or reduce capacity without reworking your delivery model.",
                          "Povećajte ili smanjite kapacitet bez promjene modela isporuke."
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium">
                        {t("Quality focus", "Fokus na kvalitet")}
                      </dt>
                      <dd className="mt-1 text-sm text-muted">
                        {t(
                          "Testing discipline and engineering standards that match enterprise expectations.",
                          "Disciplina testiranja i inženjerski standardi koji odgovaraju enterprise očekivanjima."
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 8. FINAL CTA */}
        <Section id="conversation">
          <Container>
            <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,color-mix(in_oklab,var(--accent)_12%,transparent),transparent)] p-8 sm:p-12 shadow-[var(--shadow-card)]">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {t("Let’s Talk About Your Project", "Razgovarajmo o vašem projektu")}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {t(
                      "Share a short overview and we’ll respond with next steps, suggested roles, and a clear hourly engagement outline.",
                      "Podijelite kratak pregled i javit ćemo se s narednim koracima, predloženim ulogama i jasnim okvirom saradnje na satnici."
                    )}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button href="#book-call" variant="primary">
                      {t("Book a free introductory call", "Zakažite besplatan uvodni poziv")}
                    </Button>
                    <Button href="#project-brief" variant="secondary">
                      {t("Describe your project", "Opišite svoj projekat")}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-12">
                <div
                  id="book-call"
                  className="lg:col-span-5 rounded-2xl border border-border bg-background/40 p-6 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-sm font-semibold tracking-tight">
                    {t("Intro call", "Uvodni poziv")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(
                      "For production sites, connect this button to your calendar tool (e.g., Calendly) or a dedicated booking page.",
                      "Na produkciji povežite ovo dugme s kalendar alatom (npr. Calendly) ili posebnom stranicom za zakazivanje."
                    )}
                  </p>
                </div>
                <div
                  id="project-brief"
                  className="lg:col-span-7 rounded-2xl border border-border bg-background/40 p-6 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-sm font-semibold tracking-tight">
                    {t("Project brief", "Kratak opis projekta")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t("Send a short brief to ", "Pošaljite kratak opis na ")}
                    <a
                      className="text-accent-2 underline decoration-border underline-offset-4 hover:decoration-accent"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </a>{" "}
                    {t(
                      "(replace with your business email). Include timeline, stack, and whether you need engineering, QA, or both.",
                      "(zamijenite vašim poslovnim emailom). Uključite vremenski okvir, tech stack i da li trebate inženjering, QA ili oboje."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 9. FOOTER */}
        <footer className="border-t border-border py-10">
          <Container>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-semibold tracking-tight">XSG</div>
              <p className="text-sm text-muted">
                {t(
                  "Dedicated engineering and QA teams for reliable software delivery.",
                  "Posvećeni inženjerski i QA timovi za pouzdanu isporuku softvera."
                )}
              </p>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
