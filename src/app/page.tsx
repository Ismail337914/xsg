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
                  href="#experience"
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
                    "We build and scale reliable software for growing businesses.",
                    "Gradimo i skaliramo pouzdan softver za rastuće biznise."
                  )}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                  {t(
                    "A senior development team you can plug into your product — without the risks of outsourcing.",
                    "Seniorski razvojni tim koji se uklapa u vaš proizvod — bez rizika klasičnog outsourcinga."
                  )}
                </p>
                <div className="mt-8 flex">
                  <Button href="#conversation" variant="primary">
                    {t("Start a conversation", "Započnimo razgovor")}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-border bg-surface/70 p-6 shadow-[var(--shadow-card)]">
                  <div className="text-sm font-medium">
                    {t("Operational fit", "Operativno uklapanje")}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>{t("Direct access to senior engineers", "Direktan pristup senior inženjerima")}</li>
                    <li>{t("Clear documentation and reporting", "Jasna dokumentacija i izvještavanje")}</li>
                    <li>{t("EU & US time zones", "EU i US vremenske zone")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. WHAT WE DO */}
        <Section id="what-we-do" className="border-y border-border bg-surface/30">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("What we do for product teams", "Šta radimo za produkt timove")}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {t(
                "Senior engineers and QA who slot into your roadmap and keep delivery steady.",
                "Senior inženjeri i QA koji se uklapaju u vaš roadmap i drže isporuku stabilnom."
              )}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: t("Custom web applications", "Prilagođene web aplikacije"),
                  desc: t(
                    "Built to support growth, performance, and long-term maintainability.",
                    "Građene da podrže rast, performanse i dugoročno održavanje."
                  ),
                },
                {
                  title: t("Scalable backend systems", "Skalabilni backend sistemi"),
                  desc: t(
                    "Handles traffic and data securely without slowing your roadmap.",
                    "Podnose promet i podatke sigurno, bez usporavanja roadmapa."
                  ),
                },
                {
                  title: t("Long-term product development", "Dugoročni razvoj proizvoda"),
                  desc: t(
                    "Steady senior delivery that keeps releases predictable.",
                    "Stabilna seniorska isporuka koja drži releaseove predvidivim."
                  ),
                },
                {
                  title: t("Dedicated development teams", "Posvećeni razvojni timovi"),
                  desc: t(
                    "Plug-in squads that work like your own without hiring risk.",
                    "Plug-in timovi koji rade kao vaši, bez rizika zapošljavanja."
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
                  {t("How we work", "Kako radimo")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {t(
                    "Straightforward steps that keep delivery predictable and transparent.",
                    "Jednostavni koraci koji drže isporuku predvidivom i transparentnom."
                  )}
                </p>
              </div>
              <ol className="lg:col-span-7 space-y-4">
                {[
                  {
                    title: t("Understand the business problem", "Razumijemo poslovni problem"),
                    desc: t(
                      "Agree on goals, constraints, and what success looks like.",
                      "Uskladimo ciljeve, ograničenja i šta znači uspjeh."
                    ),
                  },
                  {
                    title: t("Assemble the right senior engineers", "Okupimo odgovarajuće senior inženjere"),
                    desc: t(
                      "Match proven people to your stack and way of working.",
                      "Povežemo provjerene ljude s vašim stackom i načinom rada."
                    ),
                  },
                  {
                    title: t(
                      "Build with transparency and regular communication",
                      "Gradimo uz transparentnost i redovnu komunikaciju"
                    ),
                    desc: t(
                      "Frequent check-ins, clear documentation, and visible progress.",
                      "Česti syncovi, jasna dokumentacija i vidljiv napredak."
                    ),
                  },
                  {
                    title: t("Support and iterate long-term", "Dugoročno podržavamo i iteriramo"),
                    desc: t(
                      "Keep releases stable while improving based on results.",
                      "Održavamo stabilne releaseove i unapređujemo prema rezultatima."
                    ),
                  },
                ].map((step, idx) => (
                  <li
                    key={step.title}
                    className="rounded-2xl border border-border bg-surface/60 p-6 shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background/40 text-sm font-semibold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        {/* 5. EXPERIENCE & TRUST */}
        <Section id="experience" className="border-y border-border bg-surface/30">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("Experience & Trust", "Iskustvo i povjerenje")}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {t(
                "Our engineers have contributed to large-scale systems used by millions of users across industries such as aviation, fintech, travel and real estate.",
                "Naši inženjeri su doprinosili velikim sistemima koje koriste milioni korisnika u industrijama kao što su avijacija, fintech, putovanja i nekretnine."
              )}
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
              {t(
                "Due to NDAs, we don’t publicly list client names, but our experience speaks through the quality and reliability of our work.",
                "Zbog NDA obaveza ne objavljujemo imena klijenata, ali iskustvo se vidi kroz kvalitet i pouzdanost našeg rada."
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

        {/* 7. ENGAGEMENT MODEL */}
        <Section id="engagement-model" className="border-y border-border bg-surface/30">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("How We Engage", "Kako sarađujemo")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {t(
                    "Hourly-based cooperation with clear expectations and teams that adjust as your priorities change.",
                    "Saradnja na satnici sa jasnim očekivanjima i timovima koji se prilagođavaju promjenama prioriteta."
                  )}
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: t("Hourly-based cooperation", "Saradnja na satnici"),
                      desc: t(
                        "You pay for focused delivery time with senior contributors.",
                        "Plaćate fokusirane sate rada senior saradnika."
                      ),
                    },
                    {
                      title: t("Flexible scope and team size", "Fleksibilan obim i veličina tima"),
                      desc: t(
                        "Scale capacity up or down without long contracts.",
                        "Povećajte ili smanjite kapacitet bez dugih ugovora."
                      ),
                    },
                    {
                      title: t("Long-term partnerships preferred", "Prednost dugoročnim partnerstvima"),
                      desc: t(
                        "We stay with products to keep quality and context intact.",
                        "Ostajemo na proizvodu da kvalitet i kontekst ostanu netaknuti."
                      ),
                    },
                    {
                      title: t("Clear communication and expectations", "Jasna komunikacija i očekivanja"),
                      desc: t(
                        "Regular updates, transparent reporting, no surprises.",
                        "Redovna ažuriranja, transparentni izvještaji, bez iznenađenja."
                      ),
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-border bg-background/45 p-6 shadow-[var(--shadow-card)]"
                    >
                      <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* 8. ABOUT */}
        <Section id="about">
          <Container>
            <div className="rounded-3xl border border-border bg-background/45 p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("About XSG", "O XSG-u")}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {t(
                  "We are a senior engineering and QA group focused on reliable delivery, clear communication, and long-term partnerships.",
                  "Senior inženjerski i QA tim fokusiran na pouzdanu isporuku, jasnu komunikaciju i dugoročna partnerstva."
                )}
              </p>
            </div>
          </Container>
        </Section>

        {/* 8. FINAL CTA */}
        <Section id="conversation">
          <Container>
            <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,color-mix(in_oklab,var(--accent)_12%,transparent),transparent)] p-8 sm:p-12 shadow-[var(--shadow-card)]">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {t("Tell us about your project.", "Recite nam o vašem projektu.")}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {t(
                      "We’ll review your needs and get back to you with an honest assessment.",
                      "Pregledaćemo vaše potrebe i javiti se s iskrenom procjenom."
                    )}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <form className="grid gap-4">
                    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                      {t("Name", "Ime")}
                      <input
                        className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
                        type="text"
                        name="name"
                        placeholder={t("Your name", "Vaše ime")}
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                      {t("Email", "Email")}
                      <input
                        className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
                        type="email"
                        name="email"
                        placeholder={t("you@company.com", "vi@kompanija.com")}
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                      {t("Short description", "Kratak opis")}
                      <textarea
                        className="min-h-[140px] rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
                        name="description"
                        placeholder={t(
                          "What do you need help with?",
                          "Za šta vam treba pomoć?"
                        )}
                      />
                    </label>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold tracking-tight text-background outline-none transition-all duration-150 hover:bg-accent-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {t("Start a conversation", "Započnimo razgovor")}
                      </button>
                    </div>
                  </form>
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
