import FloatingCode from "@/components/FloatingCode";
import PageTransition from "@/components/PageTransition"

export default function Parcours() {
    const Exp = [
        {
            annee: "Fév. 2026 · Freelance",
            post: "Développeur Full Stack",
            structure: "Mon Plat",
            description: "Développement full stack d'une application mobile de restauration : conception des API REST (commandes, plats), design de l'interface mobile et mise en relation vendeurs/clients avec portefeuille électronique intégré."
        },
        {
            annee: "Jan. – Mai 2026 · Freelance",
            post: "Développeur Full Stack",
            structure: "CasseBaby",
            description: "Conception et développement d'une marketplace de pièces détachées automobiles pour le marché ivoirien — recherche par marque et modèle de véhicule, connectant particuliers et professionnels."
        },
        {
            annee: "Jan. – Mars 2026 · Freelance",
            post: "Développeur Backend",
            structure: "Black Agence",
            description: "Développement des API de gestion des propriétaires, biens immobiliers, locataires et locations pour le SaaS Black Immobilier — plateforme multi-tenant dédiée aux agences immobilières."
        },
        {
            annee: "Oct. 2024 – En cours · Freelance",
            post: "Développeur Full Stack",
            structure: "Move CI",
            description: "Modélisation de la base de données, développement des API, conception de l'interface utilisateur et déploiement d'une marketplace automobile pour le marché ivoirien."
        },
        {
            annee: "Mars – Sept. 2025 · Stage",
            post: "Stagiaire Développeur",
            structure: "Propulse Group · CGRAE",
            description: "Maintenance et mise à jour de l'application web de la CGRAE (Caisse Générale de Retraite des Agents de l'État)."
        },
    ]

    const Formations = [
        {
            annee: "2026",
            diplome: "Certificat Développeur JavaScript",
            ecole: "Udemy"
        },
        {
            annee: "2025",
            diplome: "Licence Informatique",
            ecole: "Université Virtuelle de Côte d'Ivoire"
        },
        {
            annee: "2024",
            diplome: "Certificat Développeur Full Stack",
            ecole: "Simplon Côte d'Ivoire"
        },
    ]

    return (
        <PageTransition>
        <div className="px-6 py-10 md:px-20 md:py-16 max-w-4xl">
            <FloatingCode />
            <h1 className="text-[40px] md:text-[60px] font-bold leading-none mb-2">Parcours.</h1>
            <p className="text-gray-400 mb-10 text-base">D'où je viens, ce que j'ai fait.</p>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                {/* Expérience Pro */}
                <div className="flex-1">
                    <h3 className="text-[28px] font-bold mb-6">Expérience Pro</h3>
                    <div className="relative pl-6">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-black" />
                        {Exp.map((exp, i) => (
                            <div key={i} className="relative mb-8">
                                <div className="absolute -left-7 top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-white" />
                                <span className="text-sm text-gray-400">{exp.annee}</span>
                                <p className="font-bold text-lg">{exp.post}</p>
                                <p className="text-gray-500 text-sm">{exp.structure}</p>
                                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formation */}
                <div className="flex-1">
                    <h3 className="text-[28px] font-bold mb-6">Formation</h3>
                    <div className="relative pl-6">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-black" />
                        {Formations.map((f, i) => (
                            <div key={i} className="relative mb-8">
                                <div className="absolute -left-7 top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-white" />
                                <span className="text-sm text-gray-400">{f.annee}</span>
                                <p className="font-bold text-lg">{f.diplome}</p>
                                <p className="text-gray-500 text-sm">{f.ecole}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </PageTransition>
    )
}
