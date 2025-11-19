import { motion } from 'framer-motion'
import { Sparkles, Leaf, ShieldCheck, Clock, Bath, Building2, Home, Refrigerator } from 'lucide-react'

const items = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    desc: 'Routine, deep, and move-in/out cleans tailored to your schedule.',
  },
  {
    icon: Building2,
    title: 'Commercial & Office',
    desc: 'Discreet, reliable service to keep your workplace spotless.',
  },
  {
    icon: Bath,
    title: 'Deep Clean & Sanitation',
    desc: 'Ceilings to baseboards—high-touch areas disinfected and polished.',
  },
  {
    icon: Refrigerator,
    title: 'Appliance Detailing',
    desc: 'Ovens, fridges, and more—inside and out with precision.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(244,63,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Insured, vetted, and 100% satisfaction guaranteed
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-white">Premium services</h2>
          <p className="mt-3 text-white/70">Curated packages for homes, offices, and everything in between.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md hover:bg-white/[0.06] transition-colors"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-rose-500/30 shadow-lg">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[{icon: Leaf, text: 'Eco-friendly products'}, {icon: Clock, text: 'Punctual & reliable'}, {icon: Sparkles, text: 'Hotel-grade shine'}].map((f) => (
            <div key={f.text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <f.icon className="h-5 w-5 text-rose-400" />
              <span className="text-white/80 text-sm">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
