import FloatingCode from "@/components/FloatingCode";
import { motion } from "framer-motion"

export default function Accueil() {
    return (
        <div className="relative px-6 py-10 md:px-20 md:py-16 max-w-3xl">
            <FloatingCode />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="text-[40px] md:text-[60px] font-bold leading-none mb-4">
                Dibi Jean David.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-600 mb-6">
                Développeur <span className="font-bold text-black">Full Stack</span> · 2 ans d'expérience.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
                Je suis un jeune passionné par les nouvelles technologies.
                J'ai travaillé sur des projets front-end et back-end, aussi bien
                pour des entreprises que sur des projets personnels. Travailleur,
                ambitieux et bon communicant, je m'adapte facilement à tout environnement.
            </motion.p>
        </div>
    )
}
