import React from 'react'
import Navbar from '../components/Navbar'
import Creador from '../components/Creador'
import Footer from '../components/Footer'

function Colaborar() {
  return (
    <div>
      <Navbar/>
      <div className='container fluid'>
        <div className='colaborar-cabeza'>Puedes colaborar de distintas formas con este proyecto!</div><br />
        <div className='colaborar-titulo'>Contribuir con el código en <img className='varios' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></div>
        <div className='colaborar-texto'>Puedes colaborar a mejorar el sitio creando un merge request al repositorio con 
        alguna característica nueva o puedes descargar el código y realizar otra implementación.</div><br />
        <div className='colaborar-titulo'>Puedes donar para que el sitio siga activo 
        <img className='varios' src="https://img.freepik.com/vector-premium/bolso-mano-icono-dinero-negro-signo-saco-dinero-vector-sobre-fondo-blanco-aislado-eps-10_399089-2809.jpg?w=740"/></div>
        <div className='colaborar-texto'>Busca Mascota actualmente se encuentra alojado en Google Cloud con la tarjeta de crédito 
        del autor de la web, esto tiene un costo mensual que depende de la cantidad de uso que tenga Busca Mascota.</div><br />
        <div className='colaborar-texto'>Si buscamos que este sitio siga activo y funcionando siempre puedes colaborar monetariamente
         para la causa, contribuyendo a que también el sitio se encuentre con constantes mejoras, actualizaciones, solución de problemas
          y soporte.</div><br />
        <div className='colaborar-texto'>La prioridad de estas donaciones será la siguiente:</div><br />
        <div className='colaborar-texto'>
            <div className='colaborar-citados'>1. Pagar el alojamiento y la memoria en Google Cloud</div>
            <div className='colaborar-citados'>2. Pagar el dominio buscamascota.org</div>
            <div className='colaborar-citados'>3. Pagar el certificado SSL (candado de sitio seguro)</div>
            <div className='colaborar-citados'>4. Pagar actualizaciones, mantenimiento y publicidades de las publicaciones</div>
        </div><br />
        <div className='colaborar-texto'>A continuación se dejará posibles medios para contribuir.</div>
        <div className='row'>
            <div className='col-md-3'>
                <div className='card'>
                    <img src="https://www.bolsadevalores.com.py/storage/posts/images/hlMPybUdHqV41YsyxB5lWYIX1HVIVEBm6vVkOifT.jpg" className='card-vision'/>
                    <div className='card-body'>
                        <div className='card-title'>Caja de ahorro Visión Banco</div>
                        <div className='card-text'>
                            Cuenta número: 4189747 <br />
                            Oscar González <br />
                            CI: 4648960
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <img src="https://giros.claro.com.py/img/main-logo.png" className ='card-claro'/>
                    <div className='card-body'>
                        <div className='card-title'>Giros Claro</div>
                        <div className='card-text'>
                            0986747136 (Claro)
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='colaborar-titulo'>Compartiendo la página <img className='megafono' src="https://cdn.icon-icons.com/icons2/1238/PNG/512/megaphone_83808.png" alt="" /></div>
        <div className='colaborar-texto'>Puedes colaborar dando a conocer la página con familiares, amigos, 
        conocidos o en las redes sociales! Dando a conocer una comunidad que se compromete con esta causa.</div><br />
        <div className='colaborar-texto'>Mientras más personas conozcan Busca Mascota, 
        más mascotras podrán reencontrarse con sus dueños!</div>
      </div>
      <Creador/>
      <Footer/>
    </div>
  )
}

export default Colaborar
