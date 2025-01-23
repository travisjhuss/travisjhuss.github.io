'use client';
import dynamic from 'next/dynamic'
 
// Client Components:
export const Homepage = dynamic(() => import('./Homepage'), { ssr: false })
export const NavBar = dynamic(() => import('./NavBar'), { ssr: false })
export const Contact = dynamic(() => import('./Contact'), { ssr: false })
export const Resume = dynamic(() => import('./Resume'), { ssr: false })
export const Projects = dynamic(() => import('./Projects'), { ssr: false })
