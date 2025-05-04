export interface PortfolioItem {
    slug: string;
    title: string;
    image: string;          // path to thumbnail in /public
    description?: string;   // short text (home page)
    longDescription?: string; // extended text (detail page)
    iframeUrl?: string;     // for web game embed
    screenshots?: string[]; // array of media filenames
    // Add more fields if needed (videoUrl, etc.)
}

export const usePortfolioItems = () => {
    const items: PortfolioItem[] = [
        {
            slug: 'chromatic-chameleon',
            title: 'Chromatic Chameleon',
            image: '/chromatic-chameleon.mp4',
            description: 'A small platformer game made with JavaScript.',
            longDescription: `
        In Chromatic Chameleon, you guide a color-shifting chameleon through tricky levels.
        Built in pure JavaScript using HTML canvas, the game features evolving environments
        where obstacles can only be navigated by matching the correct color at the right time.
      `,
            iframeUrl: '/games/ChromaticChameleon/index.html',
            screenshots: [
                '/start.mp4',
                '/level-three.mp4',
                '/chameleon.png',
                '/enemy.png',
                '/sakura.png',
                '/chameleon-spritesheet.png',
            ],
        },
        {
            slug: 'ghoul-rush',
            title: 'Ghoul Rush',
            image: '/ghoulrush2.mp4',
            description: 'A fast-paced 3D horde-survival magic shooter game. Swap elemental spells to fend off endless ghost waves!',
            longDescription: `
        Ghoul Rush is a Unity-made survival shooter where you defend a magical core
        against relentless spirits. Collect orbs and unlock different elemental spells,
        each with unique effects and synergies. Can you survive the final wave?
      `,
            // iframeUrl: '', // If you have a Unity web build link or so
            screenshots: [
                '/wave-one.mp4',
                '/wave-three-switch-spell.mp4',
                '/wave-six.mp4',
                '/upgrade-spell.mp4',
            ],
        },
        {
            slug: 'chaos-vs-symmetry',
            title: 'Chaos vs. Symmetry',
            image: '/symmetry-chaos.mp4',
            description: 'A short film mixing aerial footage of Montréal with Ghibli-inspired stop-motion transitions.',
            longDescription: `
        In this experimental short, perfect circular symmetry transitions into
        freeform floral chaos—mirroring the interplay between technology and nature.
        With a Flume-inspired electronic score, the film highlights the tenuous balance
        between structured modernity and organic wonder.
      `,
            iframeUrl: 'https://www.youtube.com/embed/UyIjaud9AE0',
            // screenshots: [ ... ] // if you want some
        },
        {
            slug: 'ghost-tale',
            title: 'Ghost Tale',
            image: '/ghost-tale-spawn.mp4',
            description: 'A Lua-powered Pico-8 platformer with retro charm.',
            longDescription: `
        Ghost Tale combines retro pixel art with puzzle platforming in a haunted world.
        Written in Lua for Pico-8, the game challenges you to navigate tricky obstacles
        and outsmart mischievous spirits. Collect hidden runes to unlock surprising
        story elements.
      `,
            iframeUrl: 'https://itch.io/embed/3479013',
            screenshots: [
                '/ghost-tale-spawn.mp4',
                '/ghost-tale-platforms.mp4',
                '/ghost-tale-platforms2.mp4',
                '/ghost-tale-obstacle.mp4',
                '/ghost-tale-false-grave.mp4',
                '/ghost-tale-death.mp4',
                '/ghost-tale-win.mp4',
            ],
        },
        {
            slug: 'gravity-jam',
            title: 'Gravity Jam',
            image: '/gravity-jam.mp4',
            description: 'A p5.js platformer focusing on gravity manipulation.',
            longDescription: `
        Gravity Jam is a whimsical platformer built with the p5.js library. The game
        explores gravity-bending mechanics, letting players invert physics to dodge
        hazards, collect items, and solve environmental puzzles. Lightweight yet
        addictive fun for fans of creative 2D gameplay!
      `,
            iframeUrl: '/games/GravityJam/index.html',
            screenshots: [
                '/gravity-jam-feather-fall-b.mp4',
                '/gravity-jam-snow-b.mp4',
                '/gravity-jam-laughing-skull-b',
            ],
        },
    ]

    return { items }
}
