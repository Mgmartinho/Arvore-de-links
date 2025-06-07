import type { ReactNode } from "react";

interface SocialProps {
    url: string;
    children: ReactNode;
}


export function Social({url, children}: SocialProps) {
    return(
        <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {children}
        </a>
    )
}
    
