export interface PortfolioItem {
    slug: string;
    title: string;
    image: string;          // path to thumbnail in /public
    description?: string;   // short text (home page)
    longDescription?: string; // extended text (detail page)
    iframeUrl?: string;     // for web game embed
    videoUrl?: string;     // self-hosted MP4/WebM
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
        my own history with horses and show jumping. I’ve been riding since I was six and
         competed in hunters and jumpers. Instead of trying to simulate every part of riding
          (grooming, feeding, stable management, etc.), I deliberately concentrated on a very 
          specific moment jumpers equestrians know well:  the specific feeling I was chasing:
           the rhythm and adrenaline of a jumper round: with the primary goal of accomplishing
            a fast round time with as little faults, which in reality involves factors like 
            counting strides, committing to a line, taking calculated risks, and knowing that one
             bad decision can mean a pole, a refusal, or even a fall. The game tries to capture that
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
                'Implemented core gameplay loop (waves, win/lose conditions)',
                'Built spell swapping system and elemental unlock progression',
                'Created UI/HUD feedback for spells, core health, and wave state',
                'Integrated pickups and tuned pacing through playtesting/iteration',
            ],
            engine: 'Unreal Engine 5.6',
            languages: ['Blueprint Visual Scripting'],
            developmentDuration: '4 week course project',
            objective: 'Its objective is to exercise game design and development skillfullness through creating a short digital games which explores a personal theme.',


        },


        // ── Ghoul Rush ───────────────────────────────────────────
        {
            slug: 'ghoul-rush',
            title: 'Ghoul Rush',
            image: '/ghoulrush2.mp4',
            course: 'CART 315 - Digital Game Prototyping',
            completed: 'Winter 2025',
            description: 'A fast-paced 3D horde-survival magic shooter game. Swap elemental spells to fend off endless ghost waves while defending the magical core!',
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
