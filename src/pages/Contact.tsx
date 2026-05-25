import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import type { JSX } from "react"
import PageTransition from "@/components/PageTransition"
import FloatingCode from "@/components/FloatingCode";

type Social = {
    nom: string
    handle: string
    lien: string
    icone: JSX.Element
}

export default function Contact() {
    const socials: Social[] = [
        {
            nom: "GitHub",
            handle: "@05page",
            lien: "https://github.com/05page",
            icone: <FaGithub size={22} />
        },
        {
            nom: "LinkedIn",
            handle: "Dibi Jean David",
            lien: "https://www.linkedin.com/in/jean-david-dibi-0216a3287/",
            icone: <FaLinkedin size={22} />
        },
        {
            nom: "Email",
            handle: "d.jeandavidr@gmail.com",
            lien: "mailto:d.jeandavidr@gmail.com",
            icone: <MdEmail size={22} />
        },
    ]

    return (
        <PageTransition>
        <div className="px-6 py-10 md:px-20 md:py-16 max-w-2xl">
            <FloatingCode />
            <h1 className="text-[44px] md:text-[72px] font-bold leading-none mb-3">Parlons-en.</h1>
            <p className="text-gray-400 mb-10 text-base">
                CDD,CDI, freelance, la boite de réception est ouverte.
            </p>

            <div className="flex flex-col gap-3">
                {socials.map((s) => (
                    <a
                        key={s.nom}
                        href={s.lien}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between border border-[#1a1a1a] rounded-lg px-6 py-5 hover:bg-[#fef08a] transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-gray-500">{s.icone}</div>
                            <div>
                                <p className="font-bold text-lg">{s.nom}</p>
                                <p className="text-sm text-gray-400">{s.handle}</p>
                            </div>
                        </div>
                        <span className="text-xl">→</span>
                    </a>
                ))}
            </div>
        </div>
        </PageTransition>
    )
}
