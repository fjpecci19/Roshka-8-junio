import React from 'react'
import Navbar from '../components/Navbar'
import Creador from '../components/Creador'
import Footer from '../components/Footer'
import "./styles.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


function Publicar() {
  return (
    <div>
      <Navbar/>
        <h2 className='registro-titulo'>Registro de reporte</h2>
        <div className='container fluid'>
          <div className='registro-encabezado'>Elija ubicación o zona cercana donde vio la mascota por última vez:</div>
          <MapContainer style={{height: '10px', width: '100%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      <Creador/>
      <Footer/>
    </div>
  )
}

export default Publicar
