import FloatingCode from "@/components/FloatingCode";
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const STATS = [
    { valeur: "2 ans", label: "d'expérience" },
    { valeur: "3",     label: "projets livrés" },
    { valeur: "2+",    label: "technos maîtrisées" },
]

export default function Accueil() {
    return (
        <div className="relative px-6 py-10 md:px-20 md:py-16 max-w-4xl">
            <FloatingCode />

            {/* Layout : texte à gauche, photo à droite */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-10">

                {/* Colonne texte */}
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[40px] md:text-[60px] font-bold leading-none mb-4"
                    >
                        Dibi Jean David.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-600 mb-6"
                    >
                        Développeur <span className="font-bold text-black">Full Stack</span> · 2 ans d'expérience.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl mb-10"
                    >
                        Développeur Full-Stack passionné par les nouvelles technologies.
                        J'ai travaillé sur plusieurs projets à valeur ajoutée pour des entreprises.
                        Travailleur, ambitieux, rigoureux et bon communicant,
                        je m'adapte facilement à tout environnement et à toute équipe.
                    </motion.p>

                    {/* Boutons CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-3"
                    >
                        <Link
                            to="/projets"
                            className="px-5 py-2.5 bg-black text-white text-sm rounded-md hover:bg-[#fef08a] hover:text-black transition-colors"
                        >
                            Voir mes projets →
                        </Link>
                        <Link
                            to="/contact"
                            className="px-5 py-2.5 border border-[#1a1a1a] text-sm rounded-md hover:bg-[#fef08a] transition-colors"
                        >
                            Me contacter →
                        </Link>
                    </motion.div>
                </div>

                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="shrink-0 mx-auto md:mx-0"
                >
                    <img
                        src="/me.jpg"
                        alt="Dibi Jean David"
                        className="w-36 h-36 md:w-52 md:h-52 rounded-2xl object-cover border border-gray-200 shadow-sm"
                    />
                </motion.div>
            </div>

            {/* Stats rapides */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-8 border-t border-gray-200 pt-8"
            >
                {STATS.map((s) => (
                    <div key={s.label}>
                        <p className="text-2xl font-bold">{s.valeur}</p>
                        <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
