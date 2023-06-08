import React from 'react'
import "./Textos.css"

function Textos() {
  return (
    <div>
        <div className='container-fluid custom'>
            <div className='row'>
                <div className='col-md-6'>
                    <picture>
                        <source srcSet='https://nubika.es/wp-content/uploads/2020/10/como-cuidar-pelo-husky.jpg.webp' />
                        <img src="https://nubika.es/wp-content/uploads/2020/10/como-cuidar-pelo-husky.jpg.webp" alt="" />
                    </picture>
                </div>
                <div className='col-md-6'>
                    <br />
                    <br />
                    Busca Mascota es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños. <br /><br />
                    Puedes publicar tu mascota sin costo! <br /><br />
                    Y también será publicado en las redes oficiales de Busca Mascota automáticamente. <br /><br />
                    <button type="button" class="btn btn-secondary">Buscar Mascota</button>
                    <span className='sep'></span>
                    <button type="button" class="btn btn-secondary">Publicar Mascota</button>
                </div>
            </div>
        </div>
        <div className='container-fluid custom2'>
            <div className='row'>
                <div className='col-md-6'>
                    <br />
                    <br />
                    ¿Quién puede utilizar el sitio?<br /><br />
                    - Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.<br /><br />
                    - Personas que han encontrado o avistado una mascota que parecía perdida y desean publicar un reporte.<br /><br />
                    Todo con el fin de que estas puedan reencontrarse con sus dueños.<br />
                </div>
                <div className='col-md-6'>
                    <picture>
                        <source srcSet='https://www.infobae.com/new-resizer/d76jNjx4IUq7J0J91SurdGirOtg=/992x558/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/11124552/GettyImages-544673512.jpg' />
                        <img src="https://www.infobae.com/new-resizer/d76jNjx4IUq7J0J91SurdGirOtg=/992x558/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/11124552/GettyImages-544673512.jpg" alt="" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Textos
