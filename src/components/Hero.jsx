import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950" id="home">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to improve contrast (above Spline) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-[8rem] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trusted by premium homes and offices
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-white">
            Immaculate cleaning for modern spaces
          </h1>
          <p className="mt-5 text-lg text-white/80">
            We deliver hotel-grade shine with eco-friendly products and white-glove service. From apartments to offices, we keep your spaces pristine.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-3 text-white font-medium shadow-rose-500/30 shadow-lg hover:bg-rose-400 transition-colors">
              Get a fast quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-white font-medium backdrop-blur-md hover:bg-white/20 transition-colors">
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
