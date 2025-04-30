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
        {
            slug: 'js-game',
            title: 'Lost Colors',
            image: '/js-game-thumb.png',
            description: 'A small browser game made with vanilla JS. Hover to see more!',
            iframeUrl: 'https://itch.io/embed/3479013',
            screenshots: ['/js-game-thumb.png']
        },

        // TODO add pico8 game just like above^

        {
            slug: 'unity-project',
            title: '3D Unity Project',
            image: '/unity-thumb.png',
            description: 'A 3D platformer built in Unity!',
            iframeUrl: 'https://www.youtube.com/embed/UyIjaud9AE0', // TODO this is for the chaos vid
            screenshots: ['/unity-thumb.png']
        },

        // TODO add Chaos vs. Symmetry video

        // add more items...
    ]

    return { items }
}
