import React from 'react'
import "./Filtro.css"

function Filtro() {
  return (
    <div className='container-fluid customize'>
      <div className='row'>
        <div className='col'>
            <span className='camposss'>Tipo de reporte:
            <select className='selec'>
                <option>Todos</option>
                <option>Perdido</option>
                <option>Avistado</option>
                <option>Retenido</option>
                <option>Otro</option>
            </select>
            </span>
            <span className='camposss'>Fecha últ. vez visto</span>
            <input type="date" className='selec'/>
            <span className='camposss'>Especie:
                <select className='selec'>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Loro</option>
                    <option>Otro</option>
                </select>
            </span>
        </div>
      </div><br />
      <div className='row'>
        <div className='col'>
            <span className='camposss'>País:
            <input type="text" className='selec'/>
            </span>
            <span className='camposss'>Ciudad:
            <input type="text" className='selec'/>
            </span>
            <span className='camposss'><button className='button-bus'>Buscar</button></span>
        </div>
      </div>
    </div>
  )
}

export default Filtro
