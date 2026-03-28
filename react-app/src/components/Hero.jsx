export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-badge">+500 vehículos disponibles</span>
        <h1>Encuentra tu vehículo <span className="highlight">perfecto</span></h1>
        <p>Los mejores autos nuevos y seminuevos con garantía, financiamiento y entrega a domicilio.</p>
        <div className="hero-cta">
          <a href="#catalogo" className="btn btn-primary">Ver catálogo</a>
          <a href="#contacto" className="btn btn-outline">Agendar prueba de manejo</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>+1,200</strong><span>Clientes satisfechos</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>12 años</strong><span>En el mercado</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>100%</strong><span>Financiamiento aprobado</span></div>
        </div>
      </div>
    </header>
  )
}
