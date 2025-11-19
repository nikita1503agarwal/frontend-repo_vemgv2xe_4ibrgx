import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Contact />
        <footer className="border-t border-white/10 bg-slate-950/90">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Pristine Cleaning Co. All rights reserved.</p>
            <div className="text-white/60 text-sm">Eco-friendly • Insured • Locally owned</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
