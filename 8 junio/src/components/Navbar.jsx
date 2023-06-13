import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="container-fluid bg-custom">
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <a className="navbar-brand custom-brand"><img className='perro' src="https://res.cloudinary.com/dkqtquwsj/image/upload/v1686259508/Bootcamp/BUSCAMASCOTA_woy6ug.jpg"/></a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand" href='/'>Home</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand" href='/Publicar'>Publicar mascota</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand" href='/Buscar'>Buscar mascota</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand" href='/Colaborar'>Colaborar</a>
            </div>
            <div className="container-fluid">
                <a className="navbar-brand custom-brand2 disabled">Adopciones</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
