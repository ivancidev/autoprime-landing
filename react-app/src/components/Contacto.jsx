import { useState } from 'react'

function validate(fields) {
  const errors = {}
  if (!fields.nombre || fields.nombre.trim().length < 3)
    errors.nombre = 'Ingresa tu nombre completo.'
  if (!fields.telefono || !/^\+?[\d\s\-]{8,}$/.test(fields.telefono.trim()))
    errors.telefono = 'Ingresa un teléfono válido.'
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = 'Ingresa un correo electrónico válido.'
  return errors
}

const INITIAL = { nombre: '', telefono: '', email: '', interes: '', mensaje: '' }

export default function Contacto() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSending(true)
    setTimeout(() => {
      setFields(INITIAL)
      setSending(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    }, 1200)
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contacto</span>
          <h2>Hablemos de tu próximo auto</h2>
          <p>Déjanos tus datos y un asesor se pondrá en contacto contigo en menos de 2 horas.</p>
        </div>
        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  type="text" id="nombre" placeholder="Tu nombre"
                  value={fields.nombre} onChange={set('nombre')}
                  className={errors.nombre ? 'error' : ''}
                />
                <span className="field-error">{errors.nombre}</span>
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono *</label>
                <input
                  type="tel" id="telefono" placeholder="+52 55 1234 5678"
                  value={fields.telefono} onChange={set('telefono')}
                  className={errors.telefono ? 'error' : ''}
                />
                <span className="field-error">{errors.telefono}</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email" id="email" placeholder="tu@correo.com"
                value={fields.email} onChange={set('email')}
                className={errors.email ? 'error' : ''}
              />
              <span className="field-error">{errors.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="interes">Vehículo de interés</label>
              <select id="interes" value={fields.interes} onChange={set('interes')}>
                <option value="">Selecciona un modelo</option>
                <option>BMW Serie 3</option>
                <option>Mercedes GLE</option>
                <option>Audi A5 Coupé</option>
                <option>Toyota RAV4</option>
                <option>Ford F-150</option>
                <option>BMW X5 M</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje" rows={4} placeholder="Cuéntanos qué buscas..."
                value={fields.mensaje} onChange={set('mensaje')}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={sending}
            >
              {sending ? 'Enviando...' : 'Enviar solicitud'}
            </button>
            {success && (
              <div className="form-success">
                ✅ ¡Gracias! Tu solicitud fue enviada. Te contactaremos pronto.
              </div>
            )}
          </form>
          <div className="contact-info">
            <div className="info-card">
              <h3>Visítanos</h3>
              <p>Av. Insurgentes Sur 1234, Col. Del Valle, Ciudad de México</p>
            </div>
            <div className="info-card">
              <h3>Horarios</h3>
              <p>Lun–Vie: 9:00–19:00<br />Sáb: 9:00–15:00<br />Dom: Cerrado</p>
            </div>
            <div className="info-card">
              <h3>Llámanos</h3>
              <p>+52 55 1234 5678<br />+52 55 8765 4321</p>
            </div>
            <div className="info-card">
              <h3>WhatsApp</h3>
              <p>Escríbenos directamente<br />para atención inmediata.</p>
              <a href="#" className="btn btn-outline btn-sm mt-1">Abrir WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
