import React from 'react'
import "./Creador.css"

function Creador() {
  return (
    <div>
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
    </div>
  )
}

export default Creador
