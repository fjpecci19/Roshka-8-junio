import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Mapa'
import Creador from '../components/Creador'
import Footer from '../components/Footer'
import "./styles.css"

function Publicar() {
  return (
    <div>
      <Navbar/>
        <h2 className='registro-titulo'>Registro de reporte</h2><br />
        <div className='container'>
          <div className='registro-encabezado'>Elija ubicación o zona cercana donde vio la mascota por última vez:</div><br />
          <div className='mapa'><Map/></div>
          <div className='registro-campos'>
            Tipo de reporte:
            <select className='registro-select'>
              <option>Perdido</option>
              <option>Avistado</option>
              <option>Retenido</option>
              <option>Otro</option>
            </select>
            <div className='registro-citados'>◉ Perdido: Si perdiste o alguien perdió su mascota y quieres reportarla como perdida.</div>
            <div className='registro-citados'>◉ Avistado: Si viste una mascota que parecía perdida, pero no pudiste retenerla.</div>
            <div className='registro-citados'>◉ Retenido: Si encontraste una mascota y pudiste retenerla o sabes de alguien que la tiene retenida.</div>
            <div className='registro-citados'>◉ Otro: Otro tipo de reporte.</div>
          </div><br />
          <div className='registro-campos'>
            Título de reporte: <br />
            <input className='registro-input' type="text" placeholder='Ejemplo, perro perdido en Barrio San Vicente'/>
          </div><br />
          <div className='registro-campos'>
            Descripción de reporte: <br />
            <input className='registro-input2' type="text" placeholder='Ejemplo, encontré un perro blanco con collar, creo que es una mezcla de caniche, parece asustado y no pude retenerlo'/>
          </div><br />
          <div className='registro-campos'>
            Foto: <br />
            <input className='registro-input' type="file"/>
            <div className='foto-texto'>Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla</div>
          </div><br />
          <div className='registro-campos'>
            Nombre de contacto: <br />
            <input className='registro-input' type="text" placeholder='Ejemplo: Juan Irala'/>
          </div><br />
          <div className='registro-campos'>
            Teléfono de contacto: <br />
            <input className='registro-input' type="text" placeholder='Ejemplo: 0987126311'/>
          </div><br />
          <div className='registro-campos'>
            Especie: <br />
            <select className='registro-select'>
              <option>Perro</option>
              <option>Gato</option>
              <option>Loro</option>
              <option>Otro</option>
            </select>
          </div><br />
          <div className='registro-campos'>
            Edad aproximada: <br />
            <input className='registro-input' type="number"/>
          </div><br />
          <div className='registro-campos'>
            Sexo: <br />
            <select className='registro-select'>
              <option>Macho</option>
              <option>Hembra</option>
              <option>Ni idea</option>
            </select>
          </div><br />
          <div className='registro-campos'>
            Ubicación: <br />
            <input className='registro-input' type="text" placeholder='Ejemplo: Avda. Perú c/ Avda. España 2331'/>
          </div><br />
          <div className='registro-campos'>
            Última vez visto: <br />
            <input className='registro-input' type="date"/>
          </div><br />
          <div className='terminos'>Acepto los términos de uso <button type='checkbox' className='terminos-btn'></button></div><br />
          <div className='publicar'>Publicar</div><br /><br />
        </div>
      <Creador/>
      <Footer/>
    </div>
  )
}

export default Publicar
