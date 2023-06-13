import React from 'react'
import Navbar from '../components/Navbar'
import Creador from '../components/Creador'
import Footer from '../components/Footer'
import Mapa from '../components/Mapa'
import Filtro from '../components/Filtro'

function Buscar() {
  return (
    <div>
      <Navbar/>
      <Filtro/>
      <Mapa/>
      <Creador/>
      <Footer/>
    </div>
  )
}

export default Buscar
