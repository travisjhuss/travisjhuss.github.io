'use client';
import dynamic from 'next/dynamic'
 
// Client Components:
export const NavBar = dynamic(() => import('./NavBar'), { ssr: true })
