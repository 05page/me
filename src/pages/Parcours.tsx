import FloatingCode from "@/components/FloatingCode";
import PageTransition from "@/components/PageTransition"

export default function Parcours() {
    const Exp = [
        {
            annee: "Fév. – Mai 2026 · Freelance",
            post: "Développeur Backend",
            structure: "Black Agence",
            description: "Conception des APIs en Laravel pour un projet de gestion immobilière (propriétaires, biens, locataires, locations). Déploiement continu des APIs."
        },
        {
            annee: "Jan. – Mai 2026 · Freelance",
            post: "Développeur Web",
            structure: "CasseBaby",
            description: "Développement d'une marketplace de pièces détachées automobiles avec Nuxt.js et Node.js. Déploiement continu et maintenance applicative."
        },
        {
            annee: "Oct. 2025 – Jan. 2026 · Freelance",
            post: "Développeur Web",
            structure: "Freelance",
            description: "Développement d'applications web avec Next.js et Laravel. Maintenance et mise à jour d'applications web."
        },
        {
            annee: "Mars – Sept. 2025 · Stage",
            post: "Développeur Web",
            structure: "Propulse Group",
            description: "Développement et maintenance d'applications web. Optimisation des performances et mise à niveau applicative."
        },
        {
            annee: "Août – Déc. 2024",
            post: "Développeur Web",
            structure: "Inidaa",
            description: "Maintenance et mise à jour de l'application web. Rédaction de documents projet."
        },
    ]

    const Formations = [
        {
            annee: "Fév. 2026",
            diplome: "Certification Développeur JavaScript",
            ecole: "Udemy"
        },
        {
            annee: "Juill. 2025",
            diplome: "Licence Informatique",
            ecole: "Université Virtuelle de Côte d'Ivoire"
        },
        {
            annee: "Juin 2024",
            diplome: "Certification Développeur Full Stack",
            ecole: "Simplon Côte d'Ivoire"
        },
        {
            annee: "2022",
            diplome: "Baccalauréat série D",
            ecole: "Lycée Camille Allili, Toumodi"
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
