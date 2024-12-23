"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

type OverlayProps = {
    isOpen: boolean
    onClose: () => void
    content: string
}

export function Overlay({ isOpen, onClose, content }: OverlayProps) {
    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: "100%", opacity: 0 },
    }

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
            <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={onClose}
                    aria-label="Close overlay"
                >
                    <X />
                </Button>
                <p>{content}</p>
            </div>
        </motion.div>
    )
}
