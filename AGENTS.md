<!-- BEGIN:nextjs-agent-rules -->
# Not a Next.js project

This is a **Vite + React + TypeScript** SPA (not Next). Router is react-router-dom v7 with HashRouter.
<!-- END:nextjs-agent-rules -->

# Deymar — React rebuild

Modernization of José Luis's first website (an architecture & interior-design studio in Puerto Vallarta), originally plain HTML/JS/Bootstrap/jQuery. Rebuilt in React while keeping the same content and dark aesthetic. Conversation language: Spanish, step-by-step teaching mode.

## Stack & hosting
- Vite + React 19 + TypeScript, react-router-dom v7 (HashRouter — GitHub Pages has no SPA fallback), motion for animation.
- **Deploys to GitHub Pages at the SAME url the portfolio links: https://lucasle6.github.io/Deymar/** — so `vite.config.ts` sets `base: "/Deymar/"`. Deploy path pending (GitHub Actions build). Don't move hosting without updating the portfolio card.
- Repo: github.com/Lucasle6/Deymar (de-forked standalone; original HTML site preserved in git history). Commits: no Claude co-author.

## Design (from the original)
Dark theme: bg #000, paper text #f3f6f7, muted #d1cbc7, orange accent #e8873b. Fonts Exo 2 (display) + Lato (body). Tokens in `src/index.css`.

## Content (original site, to port)
- Slider: 9 rotating hero images + rotating text (Arquitectura/Interiorismo/Proyectos/Construcción).
- Nosotros: "Tu opción de Arquitectura en Vallarta", 16 años de trayectoria, FB/IG links.
- Proyectos carousel: Casa Mariposa, Casa Cove, Villa Rosetta, Casa Stella (each has a caption paragraph in index.html — preserve verbatim).
- Contacto: Vallarta Mexico, deymar_arquitectura@hotmail.com, (+52) 331-599-6191, + a form.
- Footer: two emails (arquitectura/interiorismo), ubicaciones (Puerto Vallarta/Sayulita/Punta de Mita), FB/IG.
- Original source archived in scratchpad `deymar-src/` and in git history.

## Assets
110 MB of full-res originals were removed from the working tree (kept in git history). `scripts/optimize-images.mjs` (sharp) resizes+WebPs only the used images into `public/img/` (now 4.1 MB). Re-run after adding source images. sharp is a build-only tool (move to devDependencies).

## Progress
- ✅ Lesson 1: scaffold, router, dark theme, image pipeline, and the **Intro split-screen** (`src/pages/Intro.tsx` + `Intro.css`): two vertical halves (Arquitectura/Interiorismo), each a dimmed image that on hover fades in to full color + zooms (grow) while its half widens to 60% (flex-basis:0 + grow ratio; the grow rule is `.intro:hover .intro-half:hover` to out-specify the shrink rule), "Entrar →" cue in accent. Stacks vertically under 640px.
- ⏳ Next: build the `/sitio` page — port slider, Nosotros, Proyectos, Contacto, footer (Site.tsx is a placeholder). Then GitHub Actions deploy.

## Preview
Root `.claude/launch.json` config `deymar` (vite on port 5180). App is at http://localhost:5180/Deymar/ (base prefix). Preview screenshot tool can hang on image-heavy loads — verify with puppeteer against localhost:5180/Deymar/ instead.
