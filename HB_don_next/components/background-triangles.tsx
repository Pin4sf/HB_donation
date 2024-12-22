"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Triangle } from "./triangle"

export function BackgroundTriangles() {
    return (
        <motion.div
            className="absolute w-[500vw] h-[120vh]"
            animate={{
                x: ["0%", "-50%", "0%"], // Horizontal movement
            }}
            transition={{
                duration: 400,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "flex -ml-[500px] -space-x-[200px]",
                        "-mt-[180px]"
                    )}
                >
                    {Array.from({ length: 50 }).map((_, j) => (
                        <Triangle
                            key={j}
                            className={cn(
                                (i + j) % 2 === 0 && "rotate-[60deg] mt-[105px]"
                            )}
                        />
                    ))}
                </div>
            ))}
        </motion.div>
    )
}
