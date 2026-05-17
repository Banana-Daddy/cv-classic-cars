/*
 * 21st.dev component provenance — Coachella Valley Classic Cars
 * Query:        "product showcase card grid"
 * Component:    "Features 11" (tailark) — card dep
 * Fetched:      2026-05-16
 * Borrowed:     asymmetric bento layout (sm:col-span-3 / sm:col-span-2, rounded
 *               only on outer corners: sm:rounded-tl-xl etc.), the radial-gradient
 *               fade mask over imagery [background:radial-gradient(75%_95%_at_50%_0%,
 *               transparent,bg_100%)], and the inset-shadow + ring chrome on tiles.
 *               Translated to a vanilla CSS grid for the 6-car fleet — hero car
 *               spans 2 cols, the rest tile asymmetrically. Image fade-mask reused
 *               so hotlinked low-res CDN car photos blend into the canvas instead
 *               of sitting in hard rectangles.
 */
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function Fleet() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-muted/25">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium">1962 Ford Thunderbird</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Corinthian White over Blood Red. Fewer than ten thousand made.
                </p>
              </div>
            </CardHeader>
            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]" />
              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2">
                <img src="/car-thunderbird.jpg" alt="1962 Ford Thunderbird" width={1207} height={929} />
              </div>
            </div>
          </Card>
          <Card className="group overflow-hidden sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
              Delivered with a driver. Anywhere in the Coachella Valley.
            </p>
            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]" />
                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                  <img src="/car-deville.jpg" alt="1968 Cadillac DeVille Convertible" width={1207} height={929} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
