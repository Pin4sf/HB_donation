"use client"

import { useState } from "react"
import { BackgroundTriangles } from "@/components/background-triangles"
import { Overlay } from "@/components/overlay"
import { BackgroundTransition } from "@/components/background-transition"
import { BackgroundText } from "@/components/background-text"

const leftNavItems = [
    { id: "l1", label: "Home", info: "Welcome to our homepage!" },
    {
        id: "l2",
        label: "About",
        info: "Learn more about our company and mission.",
    },
    { id: "l3", label: "Services", info: "Explore our range of services." },
]

const rightNavItems = [
    { id: "r1", label: "Portfolio", info: "Check out our latest projects." },
    { id: "r2", label: "Contact", info: "Get in touch with us." },
    { id: "r3", label: "Blog", info: "Read our latest articles and updates." },
]

export default function Home() {
    const [overlayContent, setOverlayContent] = useState("")
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    const handleNavItemClick = (item: { label: string; info: string }) => {
        setOverlayContent(item.info)
        setIsOverlayOpen(true)
    }

    return (
        <main className="relative h-screen w-screen overflow-hidden max-h-screen bg-gray-900 flex items-center justify-center">
            <BackgroundTransition />
            <BackgroundTriangles />
            <BackgroundText />
            <div className="flex flex-col justify-between absolute h-full w-12 backdrop-blur-3xl left-0 top-0 bottom-0 border-r border-white/20 py-12 overflow-hidden">
                <p
                    className="-rotate-90 text-white font-bold text-lg cursor-pointer"
                    onClick={() => handleNavItemClick(rightNavItems[0])}
                >
                    Text1
                </p>
                <p
                    className="-rotate-90 text-white font-bold text-lg cursor-pointer"
                    onClick={() => handleNavItemClick(rightNavItems[1])}
                >
                    Text1
                </p>
                <p
                    className="-rotate-90 text-white font-bold text-lg cursor-pointer"
                    onClick={() => handleNavItemClick(rightNavItems[2])}
                >
                    Text1
                </p>
            </div>

            <div className="flex flex-col justify-between absolute h-full w-12 backdrop-blur-3xl right-0 top-0 bottom-0 border-l border-white/20 py-12 overflow-hidden">
                <p
                    className="rotate-90 text-white font-bold text-lg cursor-pointer"
                    onClick={() => handleNavItemClick(rightNavItems[0])}
                >
                    Text1
                </p>
                <p
                    className="rotate-90 text-white font-bold text-lg cursor-pointer"
                    onClick={() => handleNavItemClick(rightNavItems[1])}
                >
                    Text1
                </p>
                <p
                    className="rotate-90 text-white font-bold text-lg cursor-pointer"
                    onClick={() => handleNavItemClick(rightNavItems[2])}
                >
                    Text1
                </p>
            </div>

            <Overlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
                content={overlayContent}
            />
        </main>
    )
}
