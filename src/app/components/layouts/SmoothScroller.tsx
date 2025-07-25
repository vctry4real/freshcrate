"use client"

import { useLenisScroll } from "../hooks/useLenisScroll";

export default function SmoothScroller({children} : {children:React.ReactNode}){
    useLenisScroll()
    return <>{children}</>
    
}