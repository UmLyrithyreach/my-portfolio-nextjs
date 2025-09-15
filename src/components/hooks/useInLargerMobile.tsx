"use client"

import {useState, useEffect} from "react"

export const useInLargerMobile = (breakpoint: number) =>{
    const [isLargerMobile, setIsLargerMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsLargerMobile(window.innerWidth > breakpoint)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [breakpoint])
    return isLargerMobile;
}