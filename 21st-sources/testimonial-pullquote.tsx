/*
 * 21st.dev component provenance — Coachella Valley Classic Cars
 * Query:        "pull quote testimonial"
 * Components:   "Testimonials" (Tailark — bento blockquote grid) +
 *               "TestimonialSection" (left-accent-bar pull quote:
 *               before:bg-primary before:w-1 before:rounded-full)
 * Fetched:      2026-05-16
 * Borrowed:     (Direction A / Golden Hour) the single oversized <blockquote>
 *               pull-quote with a left accent rule + cite/role footer.
 *               (Direction B / Studio Noir) the asymmetric bento quote grid
 *               (one large col-span-2 row-span-2 quote + smaller satellites).
 *               Translated to vanilla; real Google review text + names wired in.
 */
export function PullQuote() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <blockquote className="before:bg-primary relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
          <p className="text-foreground text-lg sm:text-xl md:text-3xl">
            Joe was the absolute best to work with… the car we rented for our wedding
            photo shoot was beyond stunning. I was wearing all white, so it was a
            concern I didn’t voice, but he took care of it without being asked.
          </p>
          <footer className="mt-4 flex items-center gap-2">
            <cite className="not-italic font-medium">Lio Botello</cite>
            <span aria-hidden className="bg-foreground/15 size-1 rounded-full" />
            <span className="text-muted-foreground">Google review</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
