import { motion } from "framer-motion"
import type { ReactNode } from "react"

/**
 * PageTransition — wrapper à mettre autour du contenu de chaque page.
 * Les enfants apparaissent en fondu + légère remontée au chargement.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
