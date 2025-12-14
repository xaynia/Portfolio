export interface PortfolioItem {
    slug: string;
    title: string;
    image: string;          // path to thumbnail in /public
    description?: string;   // short text (home page)
    longDescription?: string; // extended text (detail page)
    iframeUrl?: string;     // for web game embed
    videoUrl?: string;     // self-hosted MP4/WebM
    screenshots?: string[]; // array of media filenames
    credits?: string
    ratio?: string            // for size - e.g. "4 / 3" or "16 / 9"
    course?: string;
    completed?: string;
}

/* ─────────────────────────────────────────────────────────── */

export const usePortfolioItems = () => {
    const items: PortfolioItem[] = [

        // ── Ghoul Rush ───────────────────────────────────────────
        {
            slug: 'ghoul-rush',
            title: 'Ghoul Rush',
            image: '/ghoulrush2.mp4',
            course: 'CART 315',
            completed: 'Winter 2025',
            description: 'A fast-paced 3D horde-survival magic shooter game. Swap elemental spells to fend off endless ghost waves while defending the magical core!',
            longDescription: `
        Ghoul Rush is a Unity-made survival shooter where you defend a magical core
        against hordes. Collect elemental mushrooms to unlock different elemental spells.
        Press tab to enable/disable mouse. Game made with Noémie-San Dauphinais.
        
      `,
            iframeUrl: '/games/GhoulRushWeb/index.html',
            screenshots: [
                '/wave-one.mp4',
                '/wave-three-switch-spell.mp4',
                '/wave-six.mp4',
                '/upgrade-spell.mp4'
            ],
            ratio: '960 / 640',
        },


        // ── Chromatic Chameleon ─────────────────────────────────
        {
            slug: 'chromatic-chameleon',
            title: 'Chromatic Chameleon',
            image: '/chromatic-chameleon.mp4',
            course: 'CART 263',
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
            course: 'CART 212',
            completed: 'Winter 2025',
            description: 'A short Premiere Pro and After Effects music-video inspired by Flume and Ghibli.',
            longDescription: `In this experimental short, perfect symmetry dissolves into floral chaos, mirroring the interplay between 
        technology and nature. Anchored by a Flume-inspired electronic score, the film explores the delicate balance 
        between structured modernity and, paradoxically, AI-generated organic wonder. 

        Its central themes—reimagining our relationship to nature in the era of AI—are rooted in my Indigenous heritage 
        and influenced by artists Jon McCormack and Yoshi Sodeoka. Meanwhile, the stop-motion "vision" style pays homage 
        to Hayao Miyazaki, though it departs from his traditional methods to explore new forms of visual storytelling.

        Edited in Adobe Premiere Pro and After Effects, scenic aerial shots of the L’Anneau sculpture in downtown 
        Montreal flow in time with the music. While some may see the ring solely as a frame, it transforms into a portal
        for an AI-generated stop-motion “vision”: a walk through a symmetrical garden leading to the sculpture itself.
        At the height of the chaos, lush symmetrical flowers proliferate, overtaking the scene until the film reverses
        back to the AI-ring, then transitions again to the real ring—briefly merging the digital and physical worlds
        in a glitchy reveal.

        Inspired by psychedelic aesthetics, this short aims to provoke thought about chaos, symmetry, and how they 
        intersect. It also invites viewers to reflect on AI’s evolving role in artistic creation. 
        I chose to generate 52 AI-based stop-motion frames—drawing inspiration from Botanical 
        Gardens—to depict the journey from the garden to the ring. By juxtaposing a contemporary sculpture with 
        cutting-edge AI artistry, the film pays tribute to pioneering visionaries while weaving together themes of 
        chaos and symmetry in a striking modern homage.`,
            iframeUrl: 'https://www.youtube.com/embed/UyIjaud9AE0',
            credits: `
        **Sound Attribution:**

         • *Flume Type 4 Chord Synth.wav* — TKOIII — CC BY 4.0  
          https://freesound.org/s/634192/

         • *drumloop_qwerty_138.wav* — harrisonlace — CC 0  
          https://freesound.org/s/648146/

         • *Polyflute pad.wav* — Mat397 — CC BY 3.0  
          https://freesound.org/s/485078/
      `
        },

        // ── Ghost Tale ───────────────────────────────────────────
        {
            slug: 'ghost-tale',
            title: 'Ghost Tale',
            image: '/ghost-tale-platforms.mp4',
            course: 'CART 315',
            completed: 'Winter 2025',
            description: 'A Lua-powered Pico-8 platformer with retro charm.',
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
            ]
        },

        // ── Gravity Jam ─────────────────────────────────────────
        {
            slug: 'gravity-jam',
            title: 'Gravity Jam',
            image: '/gravity-jam.mp4',
            course: 'CART 253',
            completed: 'Fall 2024',
            description: 'A p5.js game focusing on guiding falling objects using gravity and wind.',
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
        },

        // ── Cymatic Water Symphony ──────────────────────────────
        {
            slug: 'cymatic-water-symphony',
            title: 'Cymatic Water Symphony',
            image: '/cymatic-thumbnail.png',
            course: 'CART 346',
            completed: 'Fall 2024',
            description: 'A Max MSP audio-visual project exploring cymatic visuals.',
            longDescription: `
        Visual Symphony with Jitter: Cymatic Waters is an immersive audio-visual
        project that reimagines sound as an interactive and explorative medium.
        The patch combines six water-themed audio sources with dynamic visual
        representations inspired by cymatics—the study of how sound vibrations
        produce patterns in physical matter. See the attatched PDF for a comprehensive report.
      `,
            videoUrl: '/media/cymatic-visual-water-symphony.mp4',
            screenshots: [
                '/cymatic-nodes.png',
                '/cymatic-thumbnail.png',
                '/cymatic-setup.png',
                '/cymatic-patch-1.png',
                '/cymatic-patch-2.png',
                '/cymatic-patch-3.png',
                '/visual-symphony-report.pdf'
            ]
        },

        // ── Capstone ──────────────────────────────
        {
            slug: 'capstone',
            title: 'Examining the Effects of Video Game Genres on Heart Rate Variability',
            image: '/capstone-infographic.png',
            course: 'PSYC 447',
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

    return { items }
}
