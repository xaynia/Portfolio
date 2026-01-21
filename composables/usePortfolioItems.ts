export interface PortfolioItem {
    slug: string;
    title: string;
    image: string;          // path to thumbnail in /public
    description?: string;   // short text (home page)
    longDescription?: string; // extended text (detail page)
    iframeUrl?: string;     // for web game embed
    videoUrl?: string;     // self-hosted MP4/WebM
    heroImage?: string;    // optional hero image for detail page
    screenshots?: string[]; // array of media filenames
    artisticInfluences?: string;
    credits?: string
    ratio?: string            // for size - e.g. "4 / 3" or "16 / 9"
    course?: string;
    completed?: string;
    downloads?: { platform: string; arch?: string; url?: string }[]

    status?: 'completed' | 'in-progress' | 'prototype';
    teamSize?: number;        // 1 = solo, 2 = pair, etc.
    collaborators?: string[]; // partner(s)/team member names
    myRole?: string;          // your role on the team (short label)
    myContributions?: string[]; // 3–6 bullets: what YOU did (specific verbs)
    engine?: string;          // e.g. "Unity", "Unreal Engine 5.6", "Phaser.js"
    languages?: string[];     // e.g. ["TypeScript", "C#", "Lua"]
    developmentDuration?: string; // e.g. "40 hours" / "6 weeks"
    objective?: string
}

/* ─────────────────────────────────────────────────────────── */

export const usePortfolioItems = () => {
    const items: PortfolioItem[] = [

        // ── CART 498 ─────────────────────────────────────────────────────
        {
            slug: 'hide-and-seek',
            title: 'Hide And Seek: (Sky Museum)',
            image: '/498/HideAndSeek/HideSeekCover.png',
            completed: 'Fall 2025',
            course: 'CART 498 - Special Topics in CART: Real Time 3D Environments',
            // completed: 'Fall 2025', // optional (add if you want it displayed)
            description:
                'Built in Blender, Unreal Engine 5, Adobe Premiere Pro & After Effects: A cinematic walkthrough of a sci‑fi “sky museum” built around a 4D non-euclidean physics cube that preserves fragments of a lost Earth exhibit.',
            longDescription: `
Hide And Seek is a cinematic walkthrough of a sci‑fi “sky museum” built around a 4D non-euclidean physics cube that preserves fragments of a lost Earth. Floating islands are connected by walkways, non‑Euclidean door frames, and sculptural portals. At the entrance, a two‑sided frame shows a galaxy as you walk in and the moon as you leave, establishing a world where perspective and direction rewrite reality.

At the center, a glass 4D cube displays four distinct interior scenes on its faces (Earth, lounge, laser room, and chroma‑saturation room), with small robots posed as curious viewers. Further along, triangular portal presents three different “space fauna” on its faces; emissive flowers line the walkways; and a second two‑way door frame alternates between a galaxy and a shrub as you pass it. A gigantic glass tube contains a single willow, crowned by an LED warning banner reading “LAST TREE.” Surrounding islands carry hologram trees and color‑coded foliage—an artificial halo of nature contrasted against the one remaining “real” organism.

**Technical + design checkpoints**
- Built a 4D non euclidean‑style effect using opacity/masked materials so different cube faces reveal different interiors.
- Designed the floating-island horseshoe route as a sequence of readable “stages” for the final cinematic.
- Produced the walkthrough/trailer with Unreal Sequencer (crane camera pathing and beats).
- Balanced a retro cyber‑punk lighting mood against Unreal performance constraints (Lumen/Nanite-heavy scenes caused frequent crashes, requiring iterative trimming/tuning).

**Reflection (concept frame)**
Framed through Nadim Samman’s *Poetics of Encryption*, the museum stages an imaginative landscape of the dark side of technology: In reference to the authors theories on sealed zones of preservation, visible outputs with hidden mechanisms, and portal-frames where time and meaning bend - The player-character robot reads as a maintenance process walking through encrypted exhibits—able to preserve the archive, but incapable of restoring what it contains.
  `,
            iframeUrl: 'https://www.youtube.com/embed/upM9bRzj3sg',
            // videoUrl: '/media/PortfolioRender_New_1.[0001-1848].mp4',
            // heroImage: '/HideAndSeek.png',
            ratio: '2560 / 1440',


            // Documentation only (screenshots).
            screenshots: [
                '/498/HideAndSeek/Cube1.png',
                '/498/HideAndSeek/Cube2.png',
                '/498/HideAndSeek/Cube3.png',
                '/498/HideAndSeek/Chroma.png',
                '/498/HideAndSeek/Chroma1.png',
                '/498/HideAndSeek/Chroma2.png',
                '/498/HideAndSeek/Chroma3.png',
                '/498/HideAndSeek/Lounge1.png',
            ],
            status: 'completed',
            teamSize: 1,
            myRole: 'Environment / Technical Art + Level Design (Cinematic), Editor',
            myContributions: [
                'Created and integrated Blender-built room scenes into Unreal (FBX iteration: scale, smoothing, pivots, normals, material slots)',
                'Built the sky-museum level layout (floating islands + staged traversal beats for a cinematic route)',
                'Implemented non‑Euclidean cube presentation using masked/opacity materials and view/perspective logic',
                'Created the cinematic walkthrough using Unreal Sequencer (crane camera blocking, pacing, reveals)',
                'Iterated for stability/performance while preserving lighting look (Lumen/Nanite/Niagara-heavy crash troubleshooting)',
                'Exported Unreal Engine sequencer to Premiere Pro for cinematic editing and rendered edited footage',
            ],
            engine: 'Unreal Engine (Sequencer, Blueprints); Blender, Adobe Premiere Pro, Adobe After Effects',
            languages: ['Blueprint Visual Scripting'],
            developmentDuration: 'Course project',
            objective:
                'Use Unreal Engine 5 to create a real-time 3D work that engages with themes of secrecy, encryption, or hidden architectures—whether technological, spatial, social, or symbolic; Deliver a playable build and a video trailer..',
            artisticInfluences: `
**Artistic / theoretical influences**
• Antichamber: view-dependent space + non‑Euclidean framing  
• Nadim Samman: *Poetics of Encryption* 
• James Turrell: Ganzfeld Rooms
• Carlos-Cruz-Diez: Chromasaturation Room
• James Turrell: Ganzfeld Rooms
  `,
            credits: `
**References / sources**
Tutorial
- Bojan V03. *Unreal Engine 4 Tutorial: Antichamber 4D Art Gallery (Impossible Objects).*

Assets (Fab / Unreal Engine)
- Artem Bayankin: *Asteroids Planet (Sci-fi planets/asteroids pack).* https://www.fab.com/listings/7ab65e5e-5769-4332-ae10-08af042415cb
- nighttimes: *Holo-Gen Hologram Creator System.* https://www.fab.com/listings/b93edf11-8738-482c-8bf1-a98e4685bc8f
- AleksandrIvanov: *Stylized Sky Dungeon.* https://www.fab.com/listings/fce76096-4cc6-4f21-a040-55ddd3355a0c
- Fairy Fantasy: *Fairy Fantasy Stylized Plants 01.* https://www.fab.com/listings/858d0901-8e33-4f9e-8225-6997198bc4ee
- Marcelo Barrio: *Alien Robot.* https://www.fab.com/listings/d40a3ed8-6e97-470f-8302-73211ad90fce
  `,
            // ratio: '16 / 9',
        },

// ── CART 361 ─────────────────────────────────────────────────────
        {
            slug: 'ouroboros-loop',
            title: 'Ouroboros Loop — iAcorn: Scheduled Growth',
            image: '/361/Ouroboros/iAcorn.png',
            course: 'CART 361 - 3D Digital Production I',
            completed: 'Fall 2025',
            description:
                'A looping Blender animation reframing self‑care as smartphone‑scheduled maintenance: hydrate to 100% and an acorn becomes an oak, then the cycle resets.',
            longDescription: `
iAcorn: Scheduled Growth began from a personal care metaphor: being encouraged to draw a flower on my hand as a reminder that we need regular care to thrive. In practice, it’s hard to prioritize even basic self‑care like drinking water when busy—and many of us rely on smartphone notifications to tell us when to act.

Drawing on Cory Arcangel’s ideas about contemporary life running on defaults, presets, and schedules (where UI is instruction), iAcorn uses a looping animation to argue that care has become maintenance performed on cue—and that “progress” is more of a feeling than a fixed state.

Inside an iPhone-style UI, a hydration meter fills toward 100% while an acorn gradually grows into a full oak tree. When the oak produces a new acorn, the camera zooms into the falling acorn and the loop resets back to the beginning—returning to an empty 0% hydration state. The piece reflects a smartphone-dependent culture where reminders function as instructions and self-care becomes a gamified progress bar.

**Key checkpoints**
- Modeled an acorn and animated a “baby → mature” material transition using Blender shading nodes (Gradient Texture + Separate XYZ + Mapping + Texture Coordinate) with keyframes.
- Built environment + lighting: particle-system grass, keyframed day-to-night using Sun Cycles add-on, and world brightness tuning to avoid overly contrasted skies.
- Replaced foliage using Geometry Nodes by building an oak leaf texture set (alpha/normal/roughness/opacity/UV) and swapping leaf groups/collections, troubleshooting texture coordinates and instance realization.
- Animated acorn cracking via fracture add-on and hand-keyframed breakup as the sapling emerges.
- Built character arm animation with Rigify (append rig/mesh, generate rig, parent with auto-weights, pose-mode keyframes).
- Designed phone UI: with acorn frame render for transition - on a plane for the screen, shape keys for a water progress bar, and keyframed hourly text changes.
- Edited timing and revisions using Blender’s Video Sequencer (clip/re-time/re-import updated renders).

**Reflection**
This project accelerated my Blender linear keyframing and troubleshooting (Geometry Nodes, rigging, shading, VSE, keyframed lighting) and strengthened my ability to prioritize core mechanics especially when dense keyframe systems make late-stage changes costly.
  `,
            iframeUrl: 'https://www.youtube.com/embed/bhjxbDqTC7Q',
            screenshots: [
                '/361/Ouroboros/iAcorn.pdf',
                '/361/Ouroboros/iacorn1.png',
                '/361/Ouroboros/iacorn2.png',
                '/361/Ouroboros/iacorn3.png',
                '/361/Ouroboros/iacorn5.png',
                '/361/Ouroboros/iacorn6.png',
                '/361/Ouroboros/iacorn7.png',
                '/361/Ouroboros/iacorn8.png',
                '/361/Ouroboros/iacorn9.png',
                '/361/Ouroboros/iacorn10.png'

            ],
            status: 'completed',
            teamSize: 1,
            myRole: '3D Artist / Animator',

            myContributions: [
                'Developed the concept + loop structure (hydration UI driving an acorn → oak → acorn reset)',
                'Integrated a Growing Tree animation asset and aligned its timing/reads to the UI narrative',
                'Authored custom oak leaf texture maps and replaced foliage across the tree via Geometry Nodes',
                'Modeled the acorn and keyframed shader-based material transitions from “baby” to mature',
                'Built environment + cinematography (grass particles, camera animation, day/night lighting keyframes)',
                'Rigged and animated character arms, and constructed the phone screen + UI (video texture screen, shape-key loading bar, timed text)',
                'Keyframed and edited the looping sequence, including lighting and camera animation',
                'Iterated timing/lighting and re-render workflows using Blender Video Sequencer',
            ],
            engine: 'Blender (Geometry Nodes, Shader Nodes, Video Sequencer)',
            developmentDuration: 'Course project',
            objective:
                'Use linear keyframe animation techniques to create a looping sequence render in Blender (EEVEE).',
            artisticInfluences: `
**Artistic influences**
• Cory Arcangel — defaults/presets/schedules; UI as instruction  
• Self-care metaphor from therapy (care as regular practice, not a one-time fix)
  `,
            ratio: '16 / 9',
        },


        // ── Blender ──────────────────────────────
        {
            slug: 'blender',
            title: 'Blender 3D Modeling',
            image: '/361/ConceptualModel/Hourglass-front-white.png',
            course: 'CART 361 - 3D Digital Production I',
            completed: 'Fall 2025',
            description: 'Create two models (a technical, and conceptual model) using Blender. The technical model was of a everyday object (my water bottle). The conceptual model was a modified version of the water bottle, with modifiers to create a new understanding of the object.',
            longDescription: `
        For my technical model, I transformed my everyday water bottle into a conceptual model: an hourglass whose "sand"
         is shrinking, self-replicating mini bottles. This juxtaposes the eco-friendly aura of reusable merch:
          even when the object is pink, cute, and marketed as responsible, it still participates in consumerism 
          and greenwashing. Even when framed as "eco-friendly," branded plastics persist, break down, and multiply,
           mirroring how plastics become microplastics over time. 
        
      `,

            screenshots: [
                '/361/TechnicalModel/technical-front-wb.png',
                '/361/TechnicalModel/technical-sideleft.png',
                '/361/TechnicalModel/technical-back.png',
                '/361/TechnicalModel/technical-lid.png',
                '/361/TechnicalModel/technical-lid5png.png',
                '/361/ConceptualModel/Hourglass-front-white.png',
                '/361/ConceptualModel/Hourglass-side-grey.png',
                '/361/ConceptualModel/Hourglass-l.png',
                '/361/ConceptualModel/Hourglass-topdown.png',
                '/361/ConceptualModel/Hourglass-bottomup.png',
                '/361/ConceptualModel/Hourglass-bottomup2.png',
                '/361/ConceptualModel/Hourglass-side-grey2.png',
            ],
            developmentDuration: '3 week course project',
            objective: 'Create two versions of the same everyday object: one technically accurate and realistically textured, and one conceptually transformed. Together, they demonstrate how 3D realism can be used both to replicate the familiar and to disrupt it to reveal new meaning.',

        },

        // ── Horse Jumper  ───────────────────────────────────────────
        {
            slug: 'horse-jumper',
            title: 'Horse Jumper Simulator',
            image: '/HorseJumperPreview.mp4',
            course: 'CART 415 - Game Studio #1',
            completed: 'Fall 2025',
            description: 'A small 3D show‑jumping game built in Unreal Engine 5.6, where the player rides a horse around an arena and tries to complete a course of jumps in the correct order and as cleanly as possible!',
            longDescription: `
       This project is a small 3D show‑jumping game built in Unreal Engine 5.6, where 
       the player rides a horse around an arena and tries to complete a course of jumps
       in the correct order and as cleanly as possible. This project grew directly out of
        my own history with horses and show jumping. I concentrated on a very 
          specific moment jumpers equestrians know well: with the primary goal of accomplishing
            a fast round time with as little faults, which in reality involves factors like 
            counting strides, committing to a line, taking calculated risks. The game tries to capture that
              same edge between mastery and mistake, but in a safe, replayable way.
      `,

            // iframeUrl: 'https://www.youtube.com/embed/wvCe5DROdd4',
            videoUrl: '/media/HD2.mp4',
            ratio: '1484 / 872',



            downloads: [
                {
                    platform: 'macOS',
                    arch: 'Apple Silicon (arm64)',
                    url: 'https://drive.google.com/file/d/1v6IGvus4h7pK2DYeyY4GEU9GB2_-Ozmo/view?usp=drive_link'
                },
                {
                    platform: 'Linux',
                    arch: 'x86_64'
                },
                {
                    platform: 'Windows',
                    arch: 'x86_64'
                    // url intentionally missing -> site will show “Not available yet”

                },
            ],
            screenshots: [
                '/JumperReport.pdf',
            ],

            status: 'prototype',
            teamSize: 1,
            myRole: 'Designer / Gameplay / Systems Programmer',
            myContributions: [
                'Modeled jumps in Blender and imported into Unreal Engine',
                'Modified the horse riding controller (movement states, turning, camera follow, input mapping)',
                'Implemented jump interactions and scoring logic (faults, course completion, reset/retry flow)',
                'Designed and scripted ordered jump progression using triggers/checkpoints and a round timer',
                'Created UI feedback for time, faults, current objective, and course order readability',
                'Iterated on arena scale, jump spacing, and responsiveness through playtesting and tuning',
            ],
            engine: 'Unreal Engine 5.6',
            languages: ['Blueprint Visual Scripting'],
            developmentDuration: '4 week course project',
            objective:
                'Exercise game design and development skills by creating a short digital game prototype that explores a personal theme through mechanics, feel, and readable player goals.',

            credits: `
            **References / sources**
            Assets (Fab / Unreal Engine)
            - CT Game. *Advanced Riding Locomotion System (Riding System).* https://www.fab.com/listings/2140716c-a8b4-46d4-86d8-6cea729db48f  [oai_citation:0‡Fab.com](https://www.fab.com/de/listings/2140716c-a8b4-46d4-86d8-6cea729db48f)
            - MalberS Animations. *Horse Animset.* https://www.fab.com/listings/e0fc6520-8c9d-425d-9d25-3b6dc9ed56f8  [oai_citation:1‡Fab.com](https://www.fab.com/ja/listings/e0fc6520-8c9d-425d-9d25-3b6dc9ed56f8)
  `,

        },


        // ── Ghoul Rush ───────────────────────────────────────────
        {
            slug: 'ghoul-rush',
            title: 'Ghoul Rush',
            image: '/ghoulrush2.mp4',
            course: 'CART 315 - Digital Game Prototyping',
            completed: 'Winter 2025',
            description: 'A 3D horde-survival magic shooter game. Swap elemental spells to fend off endless ghost waves while defending the magical core!',
            longDescription: `
        Ghoul Rush is a Unity-made survival shooter where you defend a magical core
        against hordes. Collect elemental mushrooms to unlock different elemental spells.
        Press tab to enable/disable mouse. 
        
      `,
            iframeUrl: '/games/GhoulRushWeb/index.html',
            screenshots: [
                '/wave-one.mp4',
                '/wave-three-switch-spell.mp4',
                '/wave-six.mp4',
                '/upgrade-spell.mp4'
            ],
            ratio: '960 / 640',

            status: 'prototype',
            teamSize: 2,
            collaborators: ['Noémie-San Dauphinais'],
            myRole: 'Designer / Gameplay / Systems Programmer',
            myContributions: [
                'Implemented core gameplay loop (waves, win/lose conditions)',
                'Built spell swapping system and elemental unlock progression',
                'Created UI/HUD feedback for spells, core health, and wave state',
                'Integrated pickups and tuned pacing through playtesting/iteration',
            ],
            engine: 'Unity',
            languages: ['C#'],
            developmentDuration: 'Course project (term)',
            objective: 'Design and implement a playable horde-survival prototype focused on elemental spell swapping, wave pacing, and moment-to-moment combat readability.',
        },


        // ── Chromatic Chameleon ─────────────────────────────────
        {
            slug: 'chromatic-chameleon',
            title: 'Chromatic Chameleon',
            image: '/chromatic-chameleon.mp4',
            course: 'CART 263 - Creative Computation II',
            completed: 'Winter 2025',
            description: 'A small platformer game made with Phaser.js.',
            longDescription: `
        In Chromatic Chameleon, you guide a color-shifting chameleon through platform levels.
        Each level is initially gloomy (inspired by the game Limbo, and seasonal affective disorder), however
        as you gather Sakura petals, you fill each level with rainbow pastel colours, representing
        spring and transformation. Use your arrow keys to move and space to jump.
        
        Move using the arrow keys:
        - Left / Right arrows to run
        - Up arrow (while on the ground) to jump
        - Collect sakura blossoms to fill your color meter. 
        - Beware bombs (that will drain your progress).
        - Reach 100% color to open the magic door and restore the land’s hue completely.
      `,
            iframeUrl: '/games/ChromaticChameleon/index.html',
            screenshots: [
                '/start.mp4',
                '/level-three.mp4',
                '/chameleon.png',
                '/enemy.png',
                '/sakura.png',
                '/chameleon-spritesheet.png'
            ],
            ratio: '4 / 3',
        },

        // ── Chaos vs Symmetry ────────────────────────────────────
        {
            slug: 'chaos-vs-symmetry',
            title: 'Chaos vs. Symmetry',
            image: '/symmetry-chaos.mp4',
            course: 'CART 212 - Digital Media Studio I',
            completed: 'Winter 2025',
            description:
                'A 2–3 minute, music-video–style experimental short where Montreal’s L’Anneau ring sculpture becomes a Studio Ghibli–inspired portal—its calm symmetry blooming into AI-generated floral chaos to a Flume-like electronic score. Shot on a DJI Mini drone.',

            longDescription: `
    Serene morning drone footage of Montreal’s L’Anneau establishes circular calm before the sculpture shifts into a portal: a
    stop-motion “vision” of walking a perfectly symmetrical garden path toward the ring. As it begins to shimmer, vines and
    flowers overtake the frame in a dramatic burst of chaos—then recede, returning the ring to stillness and symmetry.

    Shot on a DJI Mini drone and edited in Adobe Premiere Pro and After Effects (with Photoshop-built masks), the film combines
    mirror effects, wave warps, keyframed masks, glitch transitions, and particle “magic.” A sequence of 52 AI-generated stills
    forms the stop-motion layer, blending anime fantasy with cinematic reality, while a Flume-inspired electronic score (synth loop,
    percussion, and ambient textures) drives the arc from order to overload and back again.
  `,

            artisticInfluences: `
      **Artistic Influences:**
    • Jon McCormack — *Turbulence* (1994): algorithmic “artificial life” and emergent digital ecosystems; a key reference for the idea of code-born nature and “what is life?”
    • Yoshi Sodeoka — *The Swarm* (2024): glitch-layered generative video that blurs natural systems with simulation and overlays; influenced my reality-vs-simulation treatment.
    • Flume: textural electronic sound + music-video pacing; informed both the score and the rhythmic editing.
    • Hayao Miyazaki / Studio Ghibli: nature-forward fantasy aesthetics and transformation motifs; shaped the portal concept and garden-world tone.
  `,

            iframeUrl: 'https://www.youtube.com/embed/UyIjaud9AE0',

            credits: `
    **Sound Attribution:**

     - *Flume Type 4 Chord Synth.wav* — TKOIII — CC BY 4.0 — https://freesound.org/s/634192/
     - *drumloop_qwerty_138.wav* — harrisonlace — CC 0 — https://freesound.org/s/648146/
     - *drumloop_qwerty_138.wav* — harrisonlace — CC 0 — https://freesound.org/s/648146/
  `,

            teamSize: 1,
            engine: 'Adobe Premiere Pro; Adobe After Effects; Photoshop',
            developmentDuration: '3 weeks to complete',
            objective:
                'Create a short 2–3 minute video which explores the intersection and interaction between chaotic and symmetrical imagery.',
            ratio: '16 / 9',
        },


        // ── Ghost Tale ───────────────────────────────────────────
        {
            slug: 'ghost-tale',
            title: 'Ghost Tale',
            image: '/ghost-tale-platforms.mp4',
            course: 'CART 315 - Digital Game Prototyping',
            completed: 'Winter 2025',
            description: 'A Lua-powered Pico-8 tiny game (platformer).',
            longDescription: `
        Ghost Tale combines retro pixel art with puzzle platforming in a haunted cute ghostly world.
        Written in Lua for Pico-8, the game challenges you to navigate obstacles, 
        as you help the ghost find its resting place.
      `,
            iframeUrl: 'https://itch.io/embed-upload/12851329?color=000000',
            screenshots: [
                '/ghost-tale-spawn.mp4',
                '/ghost-tale-platforms1.mp4',
                '/ghost-tale-platforms2.mp4',
                '/ghost-tale-obstacle.mp4',
                '/ghost-tale-false-grave.mp4',
                '/ghost-tale-death.mp4',
                '/ghost-tale-win.mp4'
            ],
            teamSize: 1,
            engine: 'Pico-8',
            languages: ['Lua'],
            developmentDuration: '1 week to complete',
            objective: 'Make a tiny game in one week.',
        },

        // ── Gravity Jam ─────────────────────────────────────────
        {
            slug: 'gravity-jam',
            title: 'Gravity Jam',
            image: '/gravity-jam.mp4',
            course: 'CART 253 - Creative Computation I',
            completed: 'Fall 2024',
            description: 'A Javascript p5.js game focusing on showcasing three simple variations: guiding falling objects using gravity and wind.',
            longDescription: `
        Gravity Jam is a p5.js game project that focuses on guiding falling objects using gravity. It showcases how a 
        single mechanic—objects influenced by gravity—can be given distinct themes and aesthetics while relying on the 
        same core programming principles. Although the variations differ in concept and style (a feather landing in a nest,
         a snowflake falling onto a candle’s flame, a skull finding its throne in a psychedelic world).
      `,
            iframeUrl: '/games/GravityJam/index.html',

            screenshots: [
                '/gravity-jam-feather-fall-b.mp4',
                '/gravity-jam-snow-b.mp4',
                '/gravity-jam-laughing-skull-b.mp4'
            ],
            ratio: '4 / 3',

            languages: ['Javascript (p5.js)'],
            developmentDuration: '5 weeks to complete',
            objective: 'Start with an existing simple experience to create three distinctive variations on that experience; Using arrays, loops, and data-structures, and menu.'

        },

        // ── Cymatic Water Symphony ──────────────────────────────
        {
            slug: 'cymatic-water-symphony',
            title: 'Cymatic Water Symphony',
            image: '/cymatic-thumbnail.png',
            course: 'CART 346 - Digital Sound I',
            completed: 'Fall 2024',
            description: 'A Max MSP audio-visual installation project showcasing cymatic visuals with Max extension Jitter (video).',
            longDescription: `
        Visual Symphony with Jitter: Cymatic Waters is an immersive audio-visual
        project that reimagines sound as an interactive and explorative medium.
        The patch combines six water-themed audio sources with dynamic visual
        representations inspired by cymatics—the study of how sound vibrations
        produce patterns in physical matter. See the attatched PDF for a comprehensive report.
      `,
            screenshots: [
                '/cymatic-nodes.png',
                '/cymatic-thumbnail.png',
                '/cymatic-setup.png',
                '/cymatic-patch-1.png',
                '/cymatic-patch-2.png',
                '/cymatic-patch-3.png',
                '/visual-symphony-report.pdf'
            ],
            teamSize: 1,
            engine: 'Max MSP',
            languages: ['Max Visual Scripting, Max extension: Jitter'],
            developmentDuration: '5 weeks to complete',
            objective: 'Make a 10 to 15-minute presentation where you will summarize and showcase the main features and uses of one Max software extension.',
        },

        // ── Capstone ──────────────────────────────
        {
            slug: 'capstone',
            title: 'Examining the Effects of Video Game Genres on Heart Rate Variability',
            image: '/capstone-infographic.png',
            course: 'PSYC 447 - Current Issues in Health Psychophysiology',
            completed: 'Winter 2024',
            description: 'This study explores how combat, platformer, and social simulation games impact heart rate variability (HRV), highlighting that intense games elevate heart rate, whereas calming games reduce physiological stress',
            longDescription: `
        This study investigates how different video game genres—combat, platformer, and social simulation—influence 
        physiological responses, particularly heart rate variability (HRV). Utilizing precise ECG measurements, 
        gameplay sessions with "Boomerang Fu," "Super Mario Bros. Wonder," and "Animal Crossing New Horizons" 
        were analyzed to determine varying levels of cardiovascular arousal and stress. Findings indicate that intense 
        and competitive games notably elevate heart rate, while calming games can reduce physiological stress, 
        demonstrating the diverse emotional and therapeutic potentials of video gaming experiences.
      `,

            screenshots: [
                '/capstone.pdf',
            ]
        }


    ]

    return {items}
}
