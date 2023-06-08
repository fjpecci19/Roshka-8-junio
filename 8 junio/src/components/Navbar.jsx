import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="container-fluid bg-custom">
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <a className="navbar-brand custom-brand"><img className='perro' src="images/perro.png"/></a>
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
                <a className="navbar-brand disabled">Adopciones</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
