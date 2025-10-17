/// <reference types="astro/client" />

declare module '*.svg' {
    const content: {
        src: string;
        width: number;
        height: number;
    };
    export default content;
}

declare module '*.png' {
    const content: {
        src: string;
        width: number;
        height: number;
    };
    export default content;
}

declare module '*.jpg' {
    const content: {
        src: string;
        width: number;
        height: number;
    };
    export default content;
}

declare module '*.webp' {
    const content: {
        src: string;
        width: number;
        height: number;
    };
    export default content;
}

declare module '*.mp4' {
    const content: string;
    export default content;
}
