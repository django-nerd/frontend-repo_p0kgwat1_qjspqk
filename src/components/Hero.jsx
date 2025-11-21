import { Leaf, Phone, Sprout } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2062&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 px-3 py-1 rounded-full text-sm mb-6">
          <Sprout className="w-4 h-4" /> Sejak 2010
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Landskap hijau yang cantik, terurus dan tahan lama
        </h1>
        <p className="mt-4 text-emerald-100/90 text-lg md:text-xl max-w-2xl mx-auto">
          Kami membantu pemilik rumah dan perniagaan membina dan menyelenggara taman impian dengan kemasan profesional.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#hubungi" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition">
            <Phone className="w-5 h-5" /> Dapatkan Sebut Harga Percuma
          </a>
          <a href="#servis" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition">
            <Leaf className="w-5 h-5" /> Lihat Servis
          </a>
        </div>
      </div>
    </header>
  )
}
