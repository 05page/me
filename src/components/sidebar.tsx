import { ChevronRight, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

/* Liste des items de navigation */
const NAV_ITEMS = [
    { label: "Accueil", to: "/" },
    { label: "Parcours", to: "/parcours" },
    { label: "Projets", to: "/projets" },
    { label: "Tech", to: "/tech" },
    { label: "Contact", to: "/contact" },
]

export default function SideBar() {
    // Récupère le chemin actuel (ex: "/parcours")
    const location = useLocation()

    return(
        <div className="w-62.5 h-full bg-[#ffffff] flex flex-col justify-start opacity-100 py-8 px-6 border-r border-solid border-[#1a1a1a] overflow-hidden">
            {/* Logo + Nom */}
            <div className="flex items-center gap-2.5">
                <div className="w-7.5 h-7.5 flex justify-center items-center border border-[#1a1a1a] rounded-md">
                    <span className="font-bold text-sm">JD</span>
                </div>
                <span className="text-sm">Jean David</span>
            </div>

            <nav className="flex flex-col gap-5 mt-9">
                <ul className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = location.pathname === item.to
                        return (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
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

            {/* Bouton télécharger CV */}
            <a
                href="/Dibi jean david raymond.pdf"
                download
                className="mt-auto mb-4 flex items-center justify-center gap-2 py-2 px-4 border border-[#1a1a1a] rounded-md text-sm hover:bg-[#fef08a] transition-colors"
            >
                ↓ Télécharger CV
            </a>

            {/* Liens sociaux */}
            <div className="flex gap-5">
                <a href="https://github.com/05page" target="_blank" rel="noreferrer" className="hover:text-[#fef08a] transition-colors">
                    <GithubIcon size={18} />
                </a>
                <a href="https://www.linkedin.com/in/jean-david-dibi-0216a3287/" target="_blank" rel="noreferrer" className="hover:text-[#fef08a] transition-colors">
                    <LinkedinIcon size={18} />
                </a>
                <a href="mailto:d.jeandavidr@gmail.com" className="hover:text-[#fef08a] transition-colors">
                    <MailIcon size={18} />
                </a>
            </div>
        </div>
    )
}