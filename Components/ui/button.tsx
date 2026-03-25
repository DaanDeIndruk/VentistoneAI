/**
 * Code Connect — Button components
 * Figma Library: u7Gw2FvJRqZeMEQ5vBmzdK
 *
 * TextButton nodes: 0:13 0:115 0:133 0:227 0:234 0:247 0:363 0:408 0:415
 * IconButton nodes: 0:261 0:289 0:316
 * Label node:       0:243
 *
 * Implementation: src/components/TextButton/TextButton.tsx
 *
 * ─── PROP MAPPING: TextButton ────────────────────────────────────────────────
 *
 * Figma prop            Waarde              → React prop
 * ─────────────────────────────────────────────────────────────────────────────
 * buttonTekst           string              → children
 * iconRight             true                → iconRight={<Icon icon={faArrowRight} />}
 * iconRight             false               → (weglaten)
 * iconLeft              true                → iconLeft={<Icon icon={...} />}
 * iconLeft              false               → (weglaten)
 * showText              altijd true         → children zichtbaar
 * state                 Default/Hover       → geen prop (CSS :hover)
 *
 * style + color                            → variant
 * ─────────────────────────────────────────────────────────────────────────────
 * style="Primary"   color="Light"          → variant="solid-light"
 * style="Secondary" color="Light"          → variant="outline-light"
 * style="Primary"   color="Primary"        → variant="solid-primary"   (TODO)
 * style="Primary"   color="Dark"           → variant="solid-dark"       (TODO)
 * style="Secondary" color="Dark"           → variant="outline-dark"     (TODO)
 * style="Tertiary"  color="Primary"        → variant="ghost-primary"    (TODO)
 * (nav inline, lichte context)             → variant="inline-light"
 * (content inline)                         → variant="inline"
 */

// ─── Voorbeelden per variant ──────────────────────────────────────────────────

// style="Primary" color="Light" — wit achtergrond, donkere tekst
// <TextButton href="#" variant="solid-light" iconRight={<Icon icon={faArrowRight} />}>
//   Meer informatie
// </TextButton>

// style="Secondary" color="Light" — transparant, witte rand en tekst
// <TextButton href="#" variant="outline-light">
//   Neem contact op
// </TextButton>

// Inline content knop
// <TextButton iconRight={<Icon icon={faArrowRight} />}>
//   Lees meer
// </TextButton>

// Inline lichte context (transparante nav)
// <TextButton variant="inline-light" iconRight={<Icon icon={faBars} />}>
//   Menu
// </TextButton>

export {}
