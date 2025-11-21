import { useState } from 'react'

export default function Contact({ onSubmit, submitting, success }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' })

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <section id="hubungi" className="py-16 bg-emerald-900/20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Hubungi Kami</h2>
        <p className="text-emerald-100/80 mt-2">Isi borang di bawah dan kami akan hubungi anda dalam masa 24 jam.</p>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4">
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50" name="name" placeholder="Nama penuh" value={form.name} onChange={change} required />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50" type="email" name="email" placeholder="Emel" value={form.email} onChange={change} required />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50" name="phone" placeholder="Telefon (opsyenal)" value={form.phone} onChange={change} />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50" name="service" placeholder="Servis yang diminati (opsyenal)" value={form.service} onChange={change} />
          <textarea className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/50 min-h-[120px]" name="message" placeholder="Mesej" value={form.message} onChange={change} required />

          <button className="md:col-span-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Menghantar...' : 'Hantar Pertanyaan'}
          </button>

          {success && (
            <div className="md:col-span-2 text-emerald-300">Terima kasih! Pertanyaan anda telah diterima.</div>
          )}
        </form>
      </div>
    </section>
  )
}
