import React from 'react'
import "./Textos.css"

function Textos() {
  return (
    <div>
        <div className='container-fluid custom'>
            <div className='row'>
                <div className='col-md-6'>
                    <picture>
                        <source srcSet='images/perrofeliz.png' />
                        <img src="images/perrofeliz.png" alt="" />
                    </picture>
                </div>
                <div className='col-md-6'>
                    <br />
                    <br />
                    Busca Mascota es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños. <br />
                    Puedes publicar tu mascota sin costo! <br />
                    Y también será publicado en las redes oficiales de Busca Mascota automáticamente. <br /><br />
                    <button type="button" class="btn btn-secondary">Buscar Mascota</button>
                    <span className='sep'></span>
                    <button type="button" class="btn btn-secondary">Publicar Mascota</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Textos
