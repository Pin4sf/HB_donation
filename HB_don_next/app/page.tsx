import { BackgroundText } from "@/components/background-text"
import { BackgroundTransition } from "@/components/background-transition"
import { BackgroundTriangles } from "@/components/background-triangles"

export default function Home() {
    return (
        <main className="relative h-screen w-screen overflow-hidden max-h-screen">
            <BackgroundTransition />
            <BackgroundTriangles />
            <BackgroundText />
        </main>
    )
}
