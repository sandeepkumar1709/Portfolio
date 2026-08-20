/**
 * The focus ring was hand-repeated 23 times across 9 files and had already
 * drifted in two of them. One constant instead.
 *
 * Keep `ring-offset-linen`: on the graphite-filled buttons the ring colour
 * equals the fill, so the near-white offset band is what makes the indicator
 * legible at all.
 */
export const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"

/** Minimum interactive size (WCAG 2.5.5 / 2.5.8). */
export const TAP_TARGET = "min-h-[44px] min-w-[44px]"

/** Shared bento-card shell. */
export const CARD_SHELL =
  "relative overflow-hidden rounded-2xl border border-black/5 bg-sand shadow-card transition-[transform,box-shadow] duration-200 hover:shadow-card-hover focus-within:shadow-card-hover"

/** Section eyebrow label. */
export const EYEBROW =
  "text-graphite/80 text-eyebrow font-medium uppercase mb-2 text-center md:text-left"

/** Section heading. */
export const SECTION_H2 =
  "text-2xl md:text-4xl font-bold font-serif tracking-tight text-graphite text-center md:text-left"
