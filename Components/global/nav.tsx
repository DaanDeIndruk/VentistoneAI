/**
 * Code Connect — Navbar + NavItem
 * Figma Design: smW9b1eDGN7v4ZY23xmD9l — Navbar node 8042:8454
 * Figma Library: u7Gw2FvJRqZeMEQ5vBmzdK — NavItem nodes 0:87 0:92 0:97 0:102 0:107
 *
 * Implementation: src/components/Nav/Nav.tsx
 *
 * ─── PROP MAPPING: Navbar ─────────────────────────────────────────────────────
 *
 * Figma prop          Waarde              → React / layout
 * ─────────────────────────────────────────────────────────────────────────────
 * background          "False"             → transparant (geen bg-kleur)
 * color               "Light"             → nav items en text zijn wit
 * showContactButton   true                → Contact knop zichtbaar (variant="solid-light")
 * button              true                → Contact knop (primary CTA)
 * button2             false               → geen tweede knop
 * centerAlign         "False"             → logo links, nav rechts
 * languageSwitch      false               → geen taalkeuze
 * languagePicker      false               → geen taalkeuze dropdown
 * showCartButton      false               → geen winkelwagen
 * seperator           false               → geen scheidingslijn
 * mobiel              "False"             → desktop variant
 *
 * Layout in HomePage: position="absolute", inset-x-0, top-0, z-10
 * Wrapper in HomePage: <div className="relative"> rondom Nav + Header
 *
 * ─── PROP MAPPING: NavItem ────────────────────────────────────────────────────
 *
 * Figma prop          Waarde              → React
 * ─────────────────────────────────────────────────────────────────────────────
 * color               "White"             → text-[var(--text-default-light)]
 * property            "Default"           → standaard nav item
 * property            "Is hover"          → hover state (CSS :hover)
 * dropdown            false               → geen dropdown chevron zichtbaar
 *                                           NB: chevron is wel gerenderd, state hangt af
 *                                           van toekomstige dropdown implementatie
 *
 * ─── VOORBEELD ────────────────────────────────────────────────────────────────
 *
 * // In HomePage.tsx:
 * <div className="relative">
 *   <Nav className="absolute inset-x-0 top-0 z-10" />
 *   <main>
 *     <Header title="..." />
 *   </main>
 * </div>
 *
 * Nav accepteert een optionele className prop voor positionering.
 * De nav items zijn hardcoded: Features, Ventistone, Producten, Techniek, Nieuws, Projecten.
 * BrandMark: "SIONE" in --text-primary (roze) met witte lijn (--surface-primary).
 */

export {}
