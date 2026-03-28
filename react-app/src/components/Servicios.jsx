const SERVICES = [
  { icon: '🚗', title: 'Test Drive', desc: 'Agenda una prueba de manejo sin costo. Llevamos el vehículo hasta tu domicilio.' },
  { icon: '💳', title: 'Financiamiento', desc: 'Planes de financiamiento flexibles con tasa preferencial desde 0.8% mensual.' },
  { icon: '🔒', title: 'Garantía extendida', desc: 'Todos los vehículos incluyen garantía de 2 años o 50,000 km sin costo extra.' },
  { icon: '📋', title: 'Trámites incluidos', desc: 'Nos encargamos de toda la documentación, placas y traspaso de manera ágil.' },
  { icon: '🚚', title: 'Entrega a domicilio', desc: 'Recibe tu vehículo en la puerta de tu casa en toda la república.' },
  { icon: '🔄', title: 'Permuta tu auto', desc: 'Entrega tu vehículo actual como parte de pago. Valuación justa garantizada.' },
]

export default function Servicios() {
  return (
    <section className="section section-dark" id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Servicios</span>
          <h2>Todo lo que necesitas en un solo lugar</h2>
          <p>Ofrecemos una experiencia de compra completa y sin complicaciones</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
