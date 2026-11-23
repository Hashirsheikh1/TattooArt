# Tattoo Art — Real Photo Restore, Tattoo Hub and Studio

Keeps the approved wing hero, light/dark themes, Lenis scrolling and GSAP animation. Removes AI-generated tattoo photos; gallery cards now attempt local images first, then actual Unsplash photography. These photos are illustrative editorial images, **not the verified work of the named artists or real studios**. Where unavailable, a neutral placeholder appears.

Navigation: **Tattoo Hub** goes to `/social`; **Studio** goes to `/shops`. No original-domain redirects are present in the new navigation.

## Run

```bash
npm install
npm run dev
```

`npm run sync:images` attempts to obtain original public gallery photos. For production, obtain permission and licensed actual artist/studio imagery and replace stock photography. Internet is required for Unsplash fallbacks.


Update: user-provided tattoo and artist photography has been integrated into gallery pieces, artist/studio cards and the Tattoo Hub feed so image placeholders are no longer shown.


### Image curation update
- Work / Gallery / Artist portfolios show tattoo photographs only (not portraits, machines, or process photographs).
- Artist cards and profiles use **representative** artist/person portraits; these are not verified photographs of the named demonstration artists.
- Studio cards use working tattoo studio / machine photography.
- Tattoo Hub feed now has curated real user-supplied back, front, sleeve and process images with matching descriptions.
- Image assets are local for offline viewing; the external original-image sync script remains optional, but is not needed for the bundled demo.
- Existing user-created browser-local posts from previous demo versions are retained in older localStorage keys; the updated feed starts from a fresh example dataset.


Runtime fix: artwork rows now reference the existing artworkPhotoUrls array rather than the undefined pieceImages variable. The curated, local photos and UI styling are otherwise unchanged.

Final revision: fixed studio hero contrast and light-theme sign-in borders; expanded community group demo with join/leave, details, topics and browser-local discussion posts; updated Latest Work and feed to emphasize back tattoos and female front portrait. All group membership and posts are demo-only.

Latest update: fixed light mode Latest Work text contrast and light-mode story background; added 7 client-provided real photos; updated Latest Work and demo Tattoo Hub feed captions (not verified artist portfolio attribution).


### Final corrections (Nov 2026)
- Studio detail tag/action spacing fixed; Follow Studio sits below badges.
- Latest Work cards now link to unique artwork records with the exact same image on detail pages.
- Scroll position resets to top on each route, including Lenis-driven navigation.
- Hero artwork, palette, typography and animation direction unchanged.


## Latest revision
- Artist Follow button moved below tags and aligned with profile details.
- Homepage navbar drops in and hero text rises in with staggered animations after splash loader.
- Supports reduced-motion preferences.


## Latest revision
Artist Follow/Following returned to the right-hand side of the black profile header. On hover/focus it becomes crimson (#C8102E) with white text. Landing Latest Work and Explore cards reveal from bottom to top as they enter the viewport via GSAP ScrollTrigger; hero and story animations remain intact.


Hero image update: red-tattoo-hero.png (user provided). Responsive background-position rules for desktop/tablet/mobile. No other sections changed.
