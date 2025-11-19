import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Request a quote</h2>
          <p className="mt-3 text-white/70">Tell us about your space and we’ll get back within the hour.</p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm text-white/80">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-rose-400" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-rose-400" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Address</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-rose-400" placeholder="123 Main St, City" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/80">Property Type</label>
                <select className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-rose-400">
                  <option className="bg-slate-900">Apartment</option>
                  <option className="bg-slate-900">House</option>
                  <option className="bg-slate-900">Office</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/80">Square Footage</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-rose-400" placeholder="e.g., 1200" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Details</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-rose-400" placeholder="Tell us about rooms, pets, priorities..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-rose-500 px-5 py-3 text-white font-medium shadow-rose-500/30 shadow-lg hover:bg-rose-400 transition-colors">
                  Send request
                </button>
              </div>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center">
                ✓
              </div>
              <h3 className="mt-4 text-white text-xl font-medium">Request sent</h3>
              <p className="mt-1 text-white/70">We’ll email you a tailored quote shortly.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
