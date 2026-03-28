import { useState } from 'react'

export default function SearchBar({ onFilter }) {
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')
  const [precio, setPrecio] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilter({ marca, tipo, precio })
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="search-bar">
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-group">
            <label>Marca</label>
            <select value={marca} onChange={e => setMarca(e.target.value)}>
              <option value="">Todas</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Audi</option>
              <option>Toyota</option>
              <option>Ford</option>
            </select>
          </div>
          <div className="search-group">
            <label>Tipo</label>
            <select value={tipo} onChange={e => setTipo(e.target.value)}>
              <option value="">Todos</option>
              <option>Sedán</option>
              <option>SUV</option>
              <option>Coupé</option>
              <option>Pickup</option>
            </select>
          </div>
          <div className="search-group">
            <label>Precio máx.</label>
            <select value={precio} onChange={e => setPrecio(e.target.value)}>
              <option value="">Sin límite</option>
              <option value="30000">$30,000</option>
              <option value="60000">$60,000</option>
              <option value="100000">$100,000</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary search-btn">Buscar</button>
        </form>
      </div>
    </section>
  )
}
