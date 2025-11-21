import { Shovel, Scissors, Droplets, Trees, BrickWall } from 'lucide-react'

const icons = {
  1: Shovel,
  2: Scissors,
  3: Droplets,
  4: Trees,
  5: BrickWall,
}

export default function Services({ services }) {
  return (
    <section id="servis" className="py-16 bg-emerald-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Perkhidmatan Kami</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = icons[s.id] || Trees
            return (
              <div key={s.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-emerald-100/80 mt-2 text-sm">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
