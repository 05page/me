import type { JSX } from "react";
import PageTransition from "@/components/PageTransition"
import { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiPostgresql, SiSocketdotio, SiNextdotjs, SiMysql, SiTailwindcss, SiLaravel, SiNuxt, SiFirebase } from "react-icons/si"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FloatingCode from "@/components/FloatingCode";

type Projet = {
    id: number
    titre: string
    description: string
    techs: string[]
    lien: string
    image: string
    github?: string
    demo?: string
    statut: string
    categorie: "pro" | "perso"
}

const techIcons: Record<string, JSX.Element> = {
    "React":        <FaReact />,
    "React Native": <FaReact />,
    "Node.js":      <FaNodeJs />,
    "PostgreSQL":   <SiPostgresql />,
    "Socket.io":    <SiSocketdotio />,
    "Next.js":      <SiNextdotjs />,
    "Nuxt.js":      <SiNuxt />,
    "Laravel":      <SiLaravel />,
    "MySQL":        <SiMysql />,
    "Tailwind":     <SiTailwindcss />,
    "Firebase":     <SiFirebase />,
}

/* Composant réutilisable pour afficher une liste de projets */
function ProjetListe({
    projets,
    onSelect,
}: {
    projets: Projet[]
    onSelect: (p: Projet) => void
}) {
    return (
        <div className="flex flex-col">
            {projets.map((projet, index) => (
                <div key={projet.id}>
                    <div className="w-full h-px bg-black" />
                    <div className="py-8 flex justify-between items-start gap-10">
                        <div className="flex-1">
                            <span className="text-xs text-gray-400">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-3xl font-bold mt-1 mb-2">{projet.titre}</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">{projet.description}</p>

                            {/* Stack */}
                            <div className="flex gap-2 flex-wrap">
                                {projet.techs.map((tech) => (
                                    <span key={tech} className="flex items-center gap-1 text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
                                        {techIcons[tech]}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Statut */}
                            {projet.statut && (
                                <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-3 mb-1 border ${
                                    projet.statut === "Déployé"
                                        ? "border-green-400 text-green-600"
                                        : "border-orange-400 text-orange-500"
                                }`}>
                                    {projet.statut}
                                </span>
                            )}

                            {/* Bouton détail */}
                            <button
                                onClick={() => onSelect(projet)}
                                className="mt-4 block text-sm border border-[#1a1a1a] rounded-md px-4 py-1.5 hover:bg-[#fef08a] transition-colors"
                            >
                                Voir détails →
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-full h-px bg-black" />
        </div>
    )
}

export default function Projets() {
    const projets: Projet[] = [
        /* ── Missions professionnelles ── */
        {
            id: 1,
            titre: "CasseBaby",
            description: "Marketplace de pièces détachées automobiles pour le marché ivoirien — connectant particuliers et professionnels avec recherche par marque et modèle de véhicule.",
            techs: ["Nuxt.js", "Node.js", "Socket.io", "Firebase"],
            lien: "#",
            image: "/cassebaby.png",
            demo: "https://cassebaby.ci",
            statut: "Déployé",
            categorie: "pro"
        },
        {
            id: 2,
            titre: "Black Immobilier",
            description: "SaaS de gestion immobilière multi-tenant pour agences — APIs de gestion des propriétaires, biens, locataires et locations, développées en Laravel.",
            techs: ["Next.js", "Laravel", "MySQL", "Tailwind"],
            lien: "#",
            image: "/blackimmo.png",
            github: "https://github.com/05page/black-immo.git",
            statut: "En développement",
            categorie: "pro"
        },
        /* ── Projets personnels ── */
        {
            id: 3,
            titre: "Move CI",
            description: "Marketplace automobile pour acheter, vendre et louer des véhicules en Côte d'Ivoire — messagerie temps réel, transactions sécurisées.",
            techs: ["React", "Node.js", "PostgreSQL", "Socket.io"],
            lien: "#",
            image: "/moveci.png",
            github: "https://github.com/05page/moveci.git",
            demo: "https://moveci.vercel.app",
            statut: "Déployé",
            categorie: "perso"
        },
        {
            id: 4,
            titre: "Mon Plat",
            description: "Application mobile de mise en relation vendeurs/clients pour la restauration en Côte d'Ivoire — publication de plats, commandes en ligne et portefeuille électronique intégré.",
            techs: ["React Native", "Node.js", "PostgreSQL"],
            lien: "#",
            image: "/monplat.png",
            github: "https://github.com/05page/mon-plat.git",
            statut: "En développement",
            categorie: "perso"
        },
    ]

    const [selected, setSelected] = useState<Projet | null>(null)

    const proMissions = projets.filter(p => p.categorie === "pro")
    const persoProjects = projets.filter(p => p.categorie === "perso")

    return (
        <PageTransition>
        <div className="px-6 py-10 md:px-20 md:py-16 max-w-4xl">
            <FloatingCode />
            <h1 className="text-[40px] md:text-[60px] font-bold leading-none mb-2">Projets.</h1>
            <p className="text-gray-400 mb-10 text-base">Ce que j'ai construit, en mission et en perso.</p>

            {/* Missions professionnelles */}
            <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-4">Missions professionnelles</h2>
            <ProjetListe projets={proMissions} onSelect={setSelected} />

            {/* Projets personnels */}
            <h2 className="text-xs text-gray-400 uppercase tracking-widest mt-12 mb-4">Projets personnels</h2>
            <ProjetListe projets={persoProjects} onSelect={setSelected} />

            {/* Modal */}
            <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
                <DialogContent className="max-w-lg bg-white text-black">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{selected?.titre}</DialogTitle>
                    </DialogHeader>

                    {/* Image */}
                    <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden">
                        {selected?.image ? (
                            <img src={selected.image} alt={selected.titre} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                Pas d'image disponible
                            </div>
                        )}
                    </div>

                    {/* Statut */}
                    {selected?.statut && (
                        <span className={`inline-block text-xs px-2 py-0.5 rounded-full border ${
                            selected.statut === "Déployé"
                                ? "border-green-400 text-green-600"
                                : "border-orange-400 text-orange-500"
                        }`}>
                            {selected.statut}
                        </span>
                    )}

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">{selected?.description}</p>

                    {/* Stack */}
                    <div className="flex gap-2 flex-wrap">
                        {selected?.techs.map((tech) => (
                            <span key={tech} className="flex items-center gap-1 text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
                                {techIcons[tech]}
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Liens */}
                    <div className="flex gap-4 pt-2">
                        {selected?.github && (
                            <a href={selected.github} target="_blank" rel="noreferrer"
                                className="text-sm border border-[#1a1a1a] rounded-md px-4 py-1.5 hover:bg-[#fef08a] transition-colors">
                                GitHub →
                            </a>
                        )}
                        {selected?.demo && (
                            <a href={selected.demo} target="_blank" rel="noreferrer"
                                className="text-sm border border-[#1a1a1a] rounded-md px-4 py-1.5 hover:bg-[#fef08a] transition-colors">
                                Démo →
                            </a>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
        </PageTransition>
    )
}
