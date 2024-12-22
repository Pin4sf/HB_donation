import { motion } from "framer-motion"

type TriangleProps = React.HTMLAttributes<HTMLDivElement>

export function Triangle({ className, ...props }: TriangleProps) {
    return (
        <motion.div
            className={`p-6 rounded-full flex items-center justify-center size-[400px] ${className} opacity-20 animate-in`}
        >
            <svg
                fill="#000000"
                viewBox="0 0 500 500"
                className="h-[350px] w-[350px] -mb-[110px]"
            >
                <polygon points="245,456.701 490,33.299 0,33.299" />
            </svg>
        </motion.div>
    )
}
