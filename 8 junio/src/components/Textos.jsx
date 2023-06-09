import React from 'react'
import "./Textos.css"

function Textos() {
  return (
    <div>
        <div className='container-fluid custom'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://nubika.es/wp-content/uploads/2020/10/como-cuidar-pelo-husky.jpg.webp" alt="" />
                </div>
                <div className='col-md-6 custom3'>
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
                <div className='col-md-6 custom3'>
                    <br />
                    <br />
                    ¿Quién puede utilizar el sitio?<br /><br />
                    - Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.<br /><br />
                    - Personas que han encontrado o avistado una mascota que parecía perdida y desean publicar un reporte.<br /><br />
                    Todo con el fin de que estas puedan reencontrarse con sus dueños.<br />
                </div>
                <div className='col-md-6'>
                    <img src="https://www.infobae.com/new-resizer/d76jNjx4IUq7J0J91SurdGirOtg=/992x558/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/11124552/GettyImages-544673512.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className='container-fluid custom4'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='col-md-6 custom4'>
                    <br />
                    <br />
                    <div className='letter'>
                        Puedes colaborar para que <br />
                        este sitio siga activo y <br />
                        funcionando siempre
                    </div><br />
                    <button type='button' className='btn btn-secondary'>
                        Colaborar
                    </button>
                </div>
            </div>
        </div>
        <div className='container-fluid custom5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='letter2'>
                        Sitio creado y administrado por: 
                    </div>
                    <img className='perfil' src="http://144.126.141.89:8888/static/app/img/3perrosyyo.jpg" alt="" />
                    <br />
                    <div className='letter3'>
                        Oscar González
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='letter2'>
                        Vínculos
                    </div><br /><br />
                    <button type='button' className='btn btn-secondary'>Términos</button>
                    <button type='button' className='btn btn-secondary'>Código fuente</button>
                </div>
                <div className='col-md-4'>
                    <div className='letter2'>
                        Contactos
                    </div>
                    <img className='icono' src="https://androidayuda.com/wp-content/uploads/2019/10/twitter-negro-1024x536.jpg.webp" alt="" />
                    <img className='icono' src="https://deseoaprender.com/wp-content/uploads/2020/08/destacada-modo-oscuro-de-facebook.jpg" alt="" />
                    <img className='icono' src="https://e1.pxfuel.com/desktop-wallpaper/328/718/desktop-wallpaper-instagram-logo-instagram-black-and-white.jpg" alt="" />
                    <img className='icono' src="https://i.blogs.es/443295/gmail-modo-oscuro-4/1366_2000.webp" alt="" />
                </div>
            </div>
        </div>
        <div className='container-fluid custom6'>
            <div className='row'>
                <div className='col-md-12'>
                    Copyright © Busca Mascota <br />
                    Pictures made by Freepik
                </div>
            </div>
        </div>
    </div>
  )
}

export default Textos
