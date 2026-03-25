/**
 * Code Connect — Header (hero sectie)
 * Figma Design: smW9b1eDGN7v4ZY23xmD9l — node 8042:8340
 *
 * Implementation: src/components/Header/Header.tsx
 *
 * ─── PROP MAPPING ─────────────────────────────────────────────────────────────
 *
 * Figma prop        Waarde              → React prop
 * ─────────────────────────────────────────────────────────────────────────────
 * heroTitel         string              → title
 * heroText          string              → (niet geïmplementeerd — subtitel, TODO)
 * background        "Image"             → achtergrond via CSS backgroundImage
 * background        "Color"             → achtergrond via surface token (TODO)
 * size              "md" / "lg"         → hoogte via min-h token (TODO)
 * alignBottom       "True"              → items-end op inner container
 * button            true                → eerste CTA knop zichtbaar
 * button2           true                → tweede CTA knop zichtbaar
 * label             false               → geen label boven titel
 * description       false               → geen body tekst onder titel
 * showMenu          false               → nav is los component (position: absolute)
 * showBreadcrumb    false               → geen breadcrumb
 * mobiel            "False"             → desktop variant
 *
 * ─── CHILD BUTTONS ────────────────────────────────────────────────────────────
 *
 * Figma child                                         → React
 * ─────────────────────────────────────────────────────────────────────────────
 * TextButton style="Primary"   color="Light"  iconRight  → variant="solid-light" iconRight
 * TextButton style="Secondary" color="Light"  geen icon  → variant="outline-light"
 *
 * ─── VOORBEELD ────────────────────────────────────────────────────────────────
 *
 * <Header title="Wij voorkomen\nhoutrot aan kozijnen" />
 *
 * De hero achtergrond is een Unsplash foto (construction/renovatie).
 * Overlay: linear-gradient met --overlay-bg-primary-30 (30% primaire kleur).
 * Nav wordt in HomePage als absolute overlay boven de Header geplaatst.
 */

export {}
