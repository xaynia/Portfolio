export interface PortfolioItem {
    slug: string;
    title: string;
    image: string;         // path to thumbnail in /public
    description?: string;  // optional
    iframeUrl?: string;    // for web game embed
    screenshots?: string[],
    // Add more fields: videoUrl, unityScreenshots, etc.
}

export const usePortfolioItems = () => {
    const items: PortfolioItem[] = [

        // Javascript Game
        {
            slug: 'chromatic-chameleon',
            title: 'Chromatic Chameleon',
            image: '/chromatic-chameleon.mp4',
            description: 'A small platformer game made with JavaScript. Hover to see more!',
            iframeUrl: '/games/ChromaticChameleon/index.html',
            screenshots: ['/start.mp4', '/level-three.mp4', '/chameleon.png', '/enemy.png', '/sakura.png', '/chameleon-spritesheet.png',]
        },

        // Unity game "Ghoul Rush"

        {
            slug: 'ghoul-rush',
            title: 'Ghoul Rush',
            image: '/ghoulrush2.mp4',
            description: 'A fast paced 3D horde-survival magic shooter game. Swap elemental spells to fend off endless ghost waves and protect the core. Made in Unity.',
            iframeUrl: '', // TODO this is for Unity game
            screenshots: ['/wave-one.mp4', '/wave-three-switch-spell.mp4', '/wave-six.mp4', '/upgrade-spell.mp4', ]
        },

        // Chaos vs. Symmetry video
        {
            slug: 'chaos-vs-symmetry',
            title: 'Chaos vs. Symmetry',
            image: '/symmetry-chaos.mp4',
            description: 'Aerial footage of Montréal’s L’Anneau morphs into a Studio-Ghibli-inspired stop-motion vision, where perfect circular symmetry erupts into floral chaos and then settles back into calm—all cut to a Flume-style electronic score.',
            iframeUrl: 'https://www.youtube.com/embed/UyIjaud9AE0',
            // screenshots: ['']
        },

        // Pico 8 Game
        {
            slug: 'ghost-tale',
            title: 'Ghost Tale',
            image: '/ghost-tale-spawn.mp4',
            description: 'A small Lua platformer game made with Pico-8 . Hover to see more!',
            iframeUrl: 'https://itch.io/embed/3479013',
            screenshots: ['/ghost-tale-spawn.mp4', '/ghost-tale-platforms.mp4','/ghost-tale-platforms2.mp4','/ghost-tale-obstacle.mp4','/ghost-tale-false-grave.mp4','/ghost-tale-death.mp4', '/ghost-tale-win.mp4']
        },

        // Gravity Jam
        {
            slug: 'gravity-jam',
            title: 'Gravity Jam',
            image: '/gravity-jam.mp4',
            description: 'A small platformer game made with JavaScript p5 libary. Hover to see more!',
            iframeUrl: '/games/GravityJam/index.html',
            screenshots: ['/gravity-jam-feather-fall-b.mp4', '/gravity-jam-snow-b.mp4', '/gravity-jam-laughing-skull-b',]
        },
    ]

    return { items }
}
