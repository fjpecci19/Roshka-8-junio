import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="container-fluid bg-custom">
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <a className="navbar-brand custom-brand"><img className='perro' src="https://images.ecestaticos.com/gf4efC_q7vXFY_l6TEJqriW88w8=/0x87:2155x1283/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg"/></a>
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
