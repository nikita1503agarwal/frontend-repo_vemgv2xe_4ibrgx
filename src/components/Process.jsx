import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, Sparkles, Smile } from 'lucide-react'

const steps = [
  { icon: Phone, title: '1. Request', desc: 'Tell us about your space, timing, and preferences.' },
  { icon: ClipboardCheck, title: '2. Plan', desc: 'We confirm scope, assign experts, and schedule.' },
  { icon: Sparkles, title: '3. Clean', desc: 'Our team arrives fully equipped and on time.' },
  { icon: Smile, title: '4. Delight', desc: 'Walkthrough and touch-ups to ensure perfection.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950/95">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">White-glove process</h2>
          <p className="mt-3 text-white/70">Clear communication, predictable timelines, immaculate results.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-rose-400">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
