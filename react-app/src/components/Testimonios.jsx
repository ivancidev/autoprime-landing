import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  {
    text: '"Proceso increíblemente fácil. En 3 días ya tenía mi BMW en la puerta de mi casa. El equipo de AutoPrime fue muy profesional en todo momento."',
    author: 'José Martínez',
    initials: 'JM',
    sub: 'BMW Serie 3 — Ciudad de México',
  },
  {
    text: '"El financiamiento fue aprobado en menos de 24 horas. Excelente trato, sin letras chiquitas. Ya es la segunda vez que compro con ellos."',
    author: 'Ana López',
    initials: 'AL',
    sub: 'Toyota RAV4 — Monterrey',
  },
  {
    text: '"Me dieron un excelente precio por mi auto de permuta. El proceso de compra fue transparente y el equipo siempre estuvo disponible para resolver dudas."',
    author: 'Carlos Ruiz',
    initials: 'CR',
    sub: 'Mercedes GLE — Guadalajara',
  },
]

export default function Testimonios() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[current]

  return (
    <section className="section" id="testimonios">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonios</span>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial" key={current}>
            <div className="stars">★★★★★</div>
            <p>{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div>
                <strong>{t.author}</strong>
                <span>{t.sub}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
