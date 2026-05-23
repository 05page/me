import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronRight, GithubIcon, LinkedinIcon, MailIcon, MenuIcon, XIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/* Même liste que la sidebar — source unique à terme */
const NAV_ITEMS = [
    { label: "Accueil", to: "/" },
    { label: "Parcours", to: "/parcours" },
    { label: "Projets", to: "/projets" },
    { label: "Tech", to: "/tech" },
    { label: "Contact", to: "/contact" },
]

export default function MobileNav() {
    // Contrôle l'ouverture / fermeture du drawer
    const [open, setOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            {/* ── Bouton hamburger ── visible seulement sur mobile */}
            <button
                onClick={() => setOpen(true)}
                className="fixed top-4 right-4 z-50 md:hidden flex items-center justify-center w-10 h-10 border border-[#1a1a1a] rounded-md bg-white shadow-sm"
                aria-label="Ouvrir le menu"
            >
                <MenuIcon size={20} />
            </button>

            {/* ── Drawer + Overlay ── AnimatePresence gère le montage/démontage */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Fond semi-transparent — clic ferme le drawer */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        />

                        {/* Drawer coulissant depuis la gauche */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed left-0 top-0 h-full w-72 bg-white z-50 flex flex-col py-8 px-6 md:hidden"
                        >
                            {/* En-tête : logo + bouton fermer */}
                            <div className="flex items-center justify-between mb-9">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7.5 h-7.5 flex justify-center items-center border border-[#1a1a1a] rounded-md">
                                        <span className="font-bold text-sm">JD</span>
                                    </div>
                                    <span className="text-sm">Jean David</span>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Fermer le menu"
                                    className="hover:text-gray-500 transition-colors"
                                >
                                    <XIcon size={20} />
                                </button>
                            </div>

                            {/* Liens de navigation */}
                            <nav>
                                <ul className="flex flex-col gap-1">
                                    {NAV_ITEMS.map((item) => {
                                        const isActive = location.pathname === item.to
                                        return (
                                            <li key={item.to}>
                                                <Link
                                                    to={item.to}
                                                    // Ferme le drawer après navigation
                                                    onClick={() => setOpen(false)}
                                                    className={`flex items-center gap-1 py-1.5 px-2.5 rounded-md text-sm ${
                                                        isActive
                                                            ? "bg-[#fef08a] font-bold"
                                                            : "hover:bg-gray-100"
                                                    }`}
                                                >
                                                    {isActive && <ChevronRight size={18} />}
                                                    {item.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>

                            {/* CV + réseaux en bas du drawer */}
                            <a
                                href="/Dibi jean david raymond.pdf"
                                download
                                className="mt-auto mb-4 flex items-center justify-center gap-2 py-2 px-4 border border-[#1a1a1a] rounded-md text-sm hover:bg-[#fef08a] transition-colors"
                            >
                                ↓ Télécharger CV
                            </a>

                            <div className="flex gap-5">
                                <a href="https://github.com/05page" target="_blank" rel="noreferrer" className="hover:text-[#fef08a] transition-colors">
                                    <GithubIcon size={18} />
                                </a>
                                <a href="https://linkedin.com/in/dibi-jean-david" target="_blank" rel="noreferrer" className="hover:text-[#fef08a] transition-colors">
                                    <LinkedinIcon size={18} />
                                </a>
                                <a href="mailto:d.jeandavidr@gmail.com" className="hover:text-[#fef08a] transition-colors">
                                    <MailIcon size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
