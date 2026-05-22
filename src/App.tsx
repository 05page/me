import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "./components/mode-toggle"
import SideBar from "./components/sidebar"
import MobileNav from "./components/MobileNav"
import Accueil from "./pages/Accueil";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Layout global : sidebar fixe à gauche + contenu à droite */}
      <div className="flex h-screen">
        {/* Sidebar cachée sur mobile, visible à partir de md (768px) */}
        <div className="hidden md:block">
          <SideBar />
        </div>
        <main className="flex-1 overflow-y-auto">
          <MobileNav />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
