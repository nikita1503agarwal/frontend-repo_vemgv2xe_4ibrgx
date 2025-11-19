import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Standard',
    price: '$129',
    desc: '2-hour clean for studios and small apartments',
    features: ['Kitchen & Bath', 'Dusting & Vacuum', 'Light Surfaces', 'Supplies Included'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$249',
    desc: '4-hour deep clean for homes up to 2 bedrooms',
    features: ['All Standard', 'Inside Appliances', 'Baseboards & Trim', 'Detailed Bathrooms'],
    highlight: true,
  },
  {
    name: 'Executive',
    price: '$449',
    desc: '8-hour full home or office with detailing',
    features: ['All Premium', 'Windows & Blinds', 'Carpet Shampoo', 'Priority Scheduling'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Transparent pricing</h2>
          <p className="mt-3 text-white/70">No surprises. Book confidently with clear packages.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-rose-400/40' : 'border-white/10'} bg-white/[0.03] p-6 backdrop-blur-md`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white shadow-rose-500/30 shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-3 text-3xl font-bold text-white">{t.price}</div>
              <p className="mt-1 text-sm text-white/70">{t.desc}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-sm text-white/80">• {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium text-white shadow-lg transition-colors ${t.highlight ? 'bg-rose-500 shadow-rose-500/30 hover:bg-rose-400' : 'bg-white/10 hover:bg-white/20'}`}>
                Book this
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
