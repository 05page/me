import { motion } from "framer-motion"
import { FaReact, FaPhp } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiNodedotjs } from "react-icons/si"
/* Icônes de technos avec position et couleur */
const techIcons = [
    { icon: <FaReact size={32} />,       color: "#61DAFB", left: "75%", top: "15%" },
    { icon: <SiJavascript size={28} />,  color: "#F7DF1E", left: "85%", top: "40%" },
    { icon: <FaPhp size={34} />,         color: "#777BB4", left: "70%", top: "65%" },
    { icon: <SiTypescript size={28} />,  color: "#3178C6", left: "88%", top: "70%" },
    { icon: <SiNodedotjs size={30} />,   color: "#339933", left: "78%", top: "85%" },
]

export default function FloatingCode() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* Logos de technos */}
            {techIcons.map((tech, i) => (
                <motion.div
                    key={i}
                    className="absolute opacity-20"
                    style={{ left: tech.left, top: tech.top, color: tech.color }}
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
                >
                    {tech.icon}
                </motion.div>
            ))}

        </div>
    )
}
