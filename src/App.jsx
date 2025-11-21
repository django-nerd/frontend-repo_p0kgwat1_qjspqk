import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

const API = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch(`${API}/api/servis`).then(r => r.json()).then(d => {
      setServices(d.services || [])
    }).finally(() => setLoading(false))
  }, [])

  const submitInquiry = async (payload) => {
    setSubmitLoading(true)
    setSuccess(false)
    try {
      const res = await fetch(`${API}/api/hubungi`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data.status === 'ok') setSuccess(true)
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 text-white">
      <nav className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold">Landskap Hijau</div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-emerald-100/80">
            <a href="#servis" className="hover:text-white">Servis</a>
            <a href="#hubungi" className="hover:text-white">Hubungi</a>
          </div>
        </div>
      </nav>

      <Hero />

      {loading ? (
        <div className="max-w-7xl mx-auto px-6 py-16 text-emerald-100/80">Memuatkan...</div>
      ) : (
        <Services services={services} />
      )}

      <About />

      <Contact onSubmit={submitInquiry} submitting={submitLoading} success={success} />

      <footer className="py-10 border-t border-white/10 text-center text-emerald-100/70 text-sm">
        © {new Date().getFullYear()} Landskap Hijau. Semua hak cipta terpelihara.
      </footer>
    </div>
  )
}

export default App
