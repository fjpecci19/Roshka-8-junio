import React from 'react'
import Navbar from '../components/Navbar'
import Creador from '../components/Creador'
import Footer from '../components/Footer'
import "./styles.css"

function Publicar() {
  return (
    <div>
      <Navbar/>
        <h2 className='registro-titulo'>Registro de reporte</h2>
      <Creador/>
      <Footer/>
    </div>
  )
}

export default Publicar
