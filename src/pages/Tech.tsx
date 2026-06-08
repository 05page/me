import type { JSX } from "react"
import PageTransition from "@/components/PageTransition"
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiPostgresql, SiMysql, SiVercel } from "react-icons/si"
import { CheckIcon } from "lucide-react"
import FloatingCode from "@/components/FloatingCode";

const techIcons: Record<string, JSX.Element> = {
    "React":         <FaReact />,
    "React Native":         <FaReact />,
    "Next.js":       <SiNextdotjs />,
    "TypeScript":    <SiTypescript />,
    "Tailwind CSS":  <SiTailwindcss />,
    "Node.js":       <FaNodeJs />,
    "Laravel":       <SiLaravel />,
    "PostgreSQL":    <SiPostgresql />,
    "MySQL":         <SiMysql />,
    "Git":           <FaGitAlt />,
    "GitHub":        <FaGithub />,
    "Figma":         <FaFigma />,
    "Vercel":        <SiVercel />,
}

const techs: Record<string, string[]> = {
    "Frontend":        ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    "Backend":         ["Node.js", "Laravel"],
    "Base de données": ["PostgreSQL", "MySQL"],
    "Outils":          ["Git", "GitHub", "Figma", "Vercel"],
}

const savoirFaire: string[] = [
    "Conception et administration de base de données",
    "Développement d'APIs REST",
    "Déploiement continu",
    "Maintenance et mise à niveau applicative",
    "Conception d'interfaces utilisateur",
    "Rédaction de documents projet",
]

export default function Tech() {
    return (
        <PageTransition>
        <div className="px-6 py-10 md:px-20 md:py-16 max-w-4xl">
            <FloatingCode />

            <h1 className="text-[40px] md:text-[60px] font-bold leading-none mb-2">Compétences.</h1>
            <p className="text-gray-400 mb-10 text-base">Ce que j'ai entre les mains au quotidien.</p>

            {/* Technologies */}
            <div className="flex flex-col gap-10">
                {Object.entries(techs).map(([groupe, items]) => (
                    <div key={groupe}>
                        <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-3">{groupe}</h3>
                        <div className="w-full h-px bg-gray-200 mb-4" />

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {items.map((tech) => (
                                <div key={tech} className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 hover:bg-[#fef08a] transition-colors">
                                    <div className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-md bg-white text-lg shrink-0">
                                        {techIcons[tech] ?? "?"}
                                    </div>
                                    <span className="text-sm font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Savoir-faire */}
            <div className="mt-14">
                <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Savoir-faire</h3>
                <div className="w-full h-px bg-gray-200 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {savoirFaire.map((item) => (
                        <div key={item} className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:bg-[#fef08a] transition-colors">
                            <CheckIcon size={15} className="shrink-0 text-gray-400" />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </PageTransition>
    )
}
