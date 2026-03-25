/**
 * Code Connect — Section components
 * Figma Design: smW9b1eDGN7v4ZY23xmD9l
 *
 * IntroSection   node 8042:8781
 * ImageSection   node 8042:9527
 * GridSection    node 8042:12339
 * Divider        node 8042:12633
 * ContentAndImg  node 8042:13867
 * MorePosts      node 8042:19782
 *
 * Implementations: src/components/ of src/sections/ (TODO — nog niet gebouwd)
 *
 * ─── IntroSection (8042:8781) ─────────────────────────────────────────────────
 * image:         true         — afbeelding rechts
 * secondButton:  true         — twee CTA knoppen
 * introText:     string       — body tekst (Merriweather Light)
 * label:         false
 * button:        true
 * arrange:       "Center"     — gecentreerde layout
 * animation:     "False"
 * Child buttons:
 *   TextButton style="Primary"   color="Primary" → solid-primary (TODO)
 *   TextButton style="Secondary" color="Dark"    → outline-dark   (TODO)
 *
 * ─── ImageSection (8042:9527) ─────────────────────────────────────────────────
 * style:         "Rounded"
 * mobile:        "False"
 * imgAmount:     "3+"         — 3 of meer foto's naast elkaar
 *
 * ─── GridSection (8042:12339) ─────────────────────────────────────────────────
 * titel:         string
 * textUnderTitel: string
 * description:   true
 * smallTextBox:  string
 * button:        false
 * label:         false
 * color:         "Light"
 * rounded:       "False"
 * textRight:     "True"       — tekst rechts, grid links
 * grid:          "6"          — 6 GridItems
 * Children: 6× GridItem (zie blocks.tsx)
 *
 * ─── Divider (8042:12633) ─────────────────────────────────────────────────────
 * size:          "Default"
 * Child: Divider color="Neutral"
 *
 * ─── ContentAndImg (8042:13867) ───────────────────────────────────────────────
 * titel:         string
 * textContent:   string
 * secondButton:  false
 * button:        true
 * label:         false
 * color:         "Light"
 * arrange:       "False"      — afbeelding rechts
 * rounded:       "False"
 * mediaFull:     "False"
 * mobile:        "False"
 * Child: TextButton style="Primary" color="Primary" → solid-primary (TODO)
 * Child: MediaItem type="Image" size="Default" rounded="True"
 *
 * ─── MorePosts (8042:19782) ───────────────────────────────────────────────────
 * titel:         "Blijf op de hoogte"
 * smallContent:  string
 * thirdRow:      false
 * topbar:        true         — balk boven met label + knop
 * pagination:    false
 * label:         true
 * secondRow:     false
 * button:        true
 * color:         "Light"
 * rounded:       "False"
 * columns:       "3"          — 3 PostCards naast elkaar
 * topbarType:    "Button"
 * mobile:        "False"
 * Children: Label, TextButton, 3× PostCard
 */

export {}
