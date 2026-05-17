/*
 * 21st.dev component provenance — Coachella Valley Classic Cars
 * Query:        "oversized typographic footer"
 * Component:    "Modem Animated Footer" (Deepak Modi)
 * Fetched:      2026-05-16
 * Borrowed:     the giant bg-clip-text gradient wordmark bleeding off the
 *               bottom of the footer (clamp(3rem,12vw,10rem), tracking-tighter,
 *               from-foreground/20 via-foreground/10 to-transparent, select-none
 *               pointer-events-none) sitting behind contact content + a thin
 *               gradient hairline. Used as the shared signature footer on both
 *               directions ("COACHELLA VALLEY" / "CV CLASSIC CARS" monolith).
 */
'use client'
export const Footer = ({ brandName = 'CV CLASSIC CARS' }) => {
  return (
    <section className="relative w-full overflow-hidden">
      <footer className="border-t bg-background relative">
        <div className="max-w-7xl mx-auto min-h-[30rem] relative p-4 py-10 flex flex-col justify-between">
          <div className="w-full flex flex-col items-center space-y-2">
            <span className="text-foreground text-3xl font-bold">{brandName}</span>
            <p className="text-muted-foreground text-center max-w-sm">
              Classic cars for your special moments. Palm Springs &amp; the Coachella Valley.
            </p>
          </div>
        </div>
        <div
          className="bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-10 font-extrabold tracking-tighter pointer-events-none select-none text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', maxWidth: '95vw' }}
        >
          {brandName}
        </div>
        <div className="absolute bottom-32 h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2" />
      </footer>
    </section>
  )
}
