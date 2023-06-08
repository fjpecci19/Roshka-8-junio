import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="container-fluid bg-custom">
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <a className="navbar-brand custom-brand"><img className='perro' src="https://www.nationalgeographic.com.es/medio/2023/04/21/boyero-de-berna-1_00000000_230421205529_480x480.jpg"/></a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand">Home</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand">Publicar mascota</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand">Buscar mascota</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand">Colaborar</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand disabled">Adopciones</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
