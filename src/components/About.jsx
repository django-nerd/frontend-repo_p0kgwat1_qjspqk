export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Siapa Kami</h2>
          <p className="mt-4 text-emerald-100/90">
            Kami adalah pasukan pakar landskap dengan pengalaman lebih 10 tahun dalam reka bentuk, pembinaan dan penyelenggaraan taman. Fokus kami adalah kualiti kerja, ketepatan masa dan kepuasan pelanggan.
          </p>
          <ul className="mt-6 space-y-2 text-emerald-100/90 text-sm">
            <li>• Berdaftar dan diinsuranskan</li>
            <li>• Jaminan kualiti kerja</li>
            <li>• Peralatan profesional dan selamat</li>
          </ul>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2069&auto=format&fit=crop"
            alt="Landskap"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
