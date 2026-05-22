export default function Parcours() {
    const Exp = [
        {
            annee: "Jan 2026 – En cours",
            post: "Développeur Full Stack",
            structure: "Medev (Start-up)",
            description: "Intégration en tant que développeur Full Stack au sein de la start-up."
        },
        {
            annee: "Déc 2025",
            post: "Développeur Full Stack Freelance",
            structure: "Black Agence",
            description: "Développement du SaaS Black Immobilier — plateforme de gestion immobilière multi-tenant pour agences (biens, locataires, paiements, quittances)."
        },
        {
            annee: "Mars 2025 – Sept. 2025",
            post: "Stagiaire Développeur",
            structure: "Propulse Group",
            description: "Collaboration avec l'équipe pour l'intégration de contenus. Optimisation des performances et sécurité des sites."
        },
    ]

    const Formations = [
        {
            annee: "Fév. 2026",
            diplome: "Certificat JavaScript",
            ecole: "Udemy"
        },
        {
            annee: "2025",
            diplome: "Licence Informatique",
            ecole: "Université Virtuelle de Côte d'Ivoire"
        },
        {
            annee: "2023",
            diplome: "Certificat Dev Fullstack",
            ecole: "Simplon Côte d'Ivoire"
        },
    ]

    return (
        <div className="px-6 py-10 md:px-20 md:py-16 max-w-4xl">
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
    )
}
