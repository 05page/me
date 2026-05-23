import type { JSX } from "react"
import PageTransition from "@/components/PageTransition"
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiPostgresql, SiMysql, SiVercel } from "react-icons/si"
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
    "Frontend":       ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    "Backend":        ["Node.js", "Laravel"],
    "Base de données":["PostgreSQL", "MySQL"],
    "Outils":         ["Git", "GitHub", "Figma", "Vercel"],
}

export default function Tech() {
    return (
        <PageTransition>
        <div className="px-6 py-10 md:px-20 md:py-16 max-w-4xl">
            <FloatingCode />

            <h1 className="text-[40px] md:text-[60px] font-bold leading-none mb-2">Compétences.</h1>
            <p className="text-gray-400 mb-10 text-base">Ce que j'ai entre les mains au quotidien.</p>

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
        </div>
        </PageTransition>
    )
}
