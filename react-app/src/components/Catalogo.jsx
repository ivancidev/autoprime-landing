import { useState, useEffect, useRef } from 'react'
import SearchBar from './SearchBar'

const CARS = [
  {
    id: 1, marca: 'BMW', tipo: 'Sedán', precio: 85000,
    nombre: 'BMW Serie 3', año: 2024, subtipo: 'Sedán · Automático · Gasolina',
    badge: 'Nuevo', badgeClass: '',
    features: ['🏎 0–100 en 5.8s', '⚙️ 258 hp', '📍 25 km/l'],
    bg: 'bmw-bg',
    svgPath: 'M20,70 Q30,40 60,38 L80,35 L120,35 L150,38 Q175,40 180,70 Z',
    wheels: [{ cx: 55, cy: 72 }, { cx: 145, cy: 72 }],
  },
  {
    id: 2, marca: 'Mercedes-Benz', tipo: 'SUV', precio: 95000,
    nombre: 'Mercedes GLE', año: 2024, subtipo: 'SUV · Automático · Híbrido',
    badge: 'Popular', badgeClass: 'badge-hot',
    features: ['🏎 0–100 en 6.1s', '⚙️ 367 hp', '📍 22 km/l'],
    bg: 'mercedes-bg',
    svgPath: 'M15,68 Q25,35 55,32 L85,30 L115,30 L155,32 Q180,35 185,68 Z',
    wheels: [{ cx: 50, cy: 70 }, { cx: 150, cy: 70 }],
  },
  {
    id: 3, marca: 'Audi', tipo: 'Coupé', precio: 72000,
    nombre: 'Audi A5 Coupé', año: 2024, subtipo: 'Coupé · Automático · Gasolina',
    badge: 'Nuevo', badgeClass: '',
    features: ['🏎 0–100 en 5.1s', '⚙️ 261 hp', '📍 23 km/l'],
    bg: 'audi-bg',
    svgPath: 'M25,72 Q35,42 65,38 L90,36 L110,36 L145,38 Q170,42 175,72 Z',
    wheels: [{ cx: 58, cy: 74 }, { cx: 142, cy: 74 }],
  },
  {
    id: 4, marca: 'Toyota', tipo: 'SUV', precio: 45000,
    nombre: 'Toyota RAV4', año: 2023, subtipo: 'SUV · Automático · Híbrido',
    badge: 'Oferta', badgeClass: 'badge-offer',
    features: ['🏎 0–100 en 8.1s', '⚙️ 219 hp', '📍 34 km/l'],
    bg: 'toyota-bg',
    svgPath: 'M15,70 Q25,36 58,33 L88,31 L112,31 L152,33 Q178,36 185,70 Z',
    wheels: [{ cx: 52, cy: 72 }, { cx: 148, cy: 72 }],
  },
  {
    id: 5, marca: 'Ford', tipo: 'Pickup', precio: 55000,
    nombre: 'Ford F-150', año: 2024, subtipo: 'Pickup · Automático · Gasolina',
    badge: 'Nuevo', badgeClass: '',
    features: ['🏎 0–100 en 6.5s', '⚙️ 400 hp', '📍 18 km/l'],
    bg: 'ford-bg',
    svgPath: 'M10,68 Q18,38 48,35 L80,33 L120,33 L162,35 Q185,38 190,68 Z',
    wheels: [{ cx: 45, cy: 70 }, { cx: 155, cy: 70 }],
  },
  {
    id: 6, marca: 'BMW', tipo: 'SUV', precio: 110000,
    nombre: 'BMW X5 M', año: 2024, subtipo: 'SUV · Automático · Gasolina',
    badge: 'Premium', badgeClass: 'badge-hot',
    features: ['🏎 0–100 en 4.3s', '⚙️ 523 hp', '📍 16 km/l'],
    bg: 'bmw2-bg',
    svgPath: 'M12,68 Q22,34 52,31 L82,29 L118,29 L158,31 Q182,34 188,68 Z',
    wheels: [{ cx: 48, cy: 70 }, { cx: 152, cy: 70 }],
  },
]

function CarCard({ car }) {
  const [fav, setFav] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        observer.unobserve(el)
      }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className="car-card"
      style={{ transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease, border-color 0.25s ease' }}
    >
      <div className="car-img">
        <div className={`car-placeholder ${car.bg}`}>
          <svg viewBox="0 0 200 100" className="car-svg">
            <path d={car.svgPath} fill="rgba(255,255,255,0.15)" />
            {car.wheels.map((w, i) => (
              <circle key={i} cx={w.cx} cy={w.cy} r="14" fill="rgba(255,255,255,0.2)" />
            ))}
          </svg>
        </div>
        <span className={`car-badge ${car.badgeClass}`}>{car.badge}</span>
        <button
          className={`car-fav${fav ? ' active' : ''}`}
          aria-label="Favorito"
          onClick={() => setFav(f => !f)}
        >
          {fav ? '♥' : '♡'}
        </button>
      </div>
      <div className="car-info">
        <div className="car-header">
          <h3>{car.nombre}</h3>
          <span className="car-year">{car.año}</span>
        </div>
        <p className="car-type">{car.subtipo}</p>
        <ul className="car-features">
          {car.features.map(f => <li key={f}>{f}</li>)}
        </ul>
        <div className="car-footer">
          <div className="car-price">${car.precio.toLocaleString()} <small>USD</small></div>
          <a href="#contacto" className="btn btn-sm btn-primary">Cotizar</a>
        </div>
      </div>
    </article>
  )
}

export default function Catalogo() {
  const [filters, setFilters] = useState({ marca: '', tipo: '', precio: '' })

  const filtered = CARS.filter(car => {
    const maxPrecio = filters.precio ? parseInt(filters.precio) : Infinity
    return (
      (!filters.marca || car.marca === filters.marca) &&
      (!filters.tipo || car.tipo === filters.tipo) &&
      car.precio <= maxPrecio
    )
  })

  return (
    <>
      <SearchBar onFilter={setFilters} />
      <section className="section" id="catalogo">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Catálogo</span>
            <h2>Vehículos destacados</h2>
            <p>Selección premium con los mejores precios del mercado</p>
          </div>
          {filtered.length > 0 ? (
            <div className="cars-grid">
              {filtered.map(car => <CarCard key={car.id} car={car} />)}
            </div>
          ) : (
            <div className="no-results">
              <p>No se encontraron vehículos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
