import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Footer.css'



const Footer = () => {

  const location = useLocation()
  const renderNaigationLinks = () => {
    if (location.pathname === '/'){
      return(
        <div className='LinkFooterNav'> 
          <Link to="/cursos">Cursos</Link>
            
          <Link   to="/nosotras">Sobre Nosotras</Link>
          
          <Link  to="/contacto">Contacto</Link>
        </div>
      )
    }else if(location.pathname === '/cursos'){
      return(
        <div className='LinkFooterNav'>
              <Link  to="/">Home</Link>

              <Link   to="/nosotras">Sobre Nosotras</Link>

              <Link  to="/contacto">Contacto</Link>
        </div>
      )
    }else if(location.pathname === '/nosotras'){
      return(
        <div className='LinkFooterNav'>
              <Link  to="/">Home</Link>

              <Link to="/cursos">Cursos</Link>

              <Link  to="/contacto">Contacto</Link>
        </div>
      )
    }else if(location.pathname === '/contacto'){
      return(
        <div className='LinkFooterNav'>
              <Link  to="/">Home</Link>

              <Link to="/cursos">Cursos</Link>

              <Link   to="/nosotras">Sobre Nosotras</Link>

        </div>
      )
    }
    
  }

  return (
    <div className="FooterClass">
      <div className="FooterContainer">
        <div className="LeftFooter">
          <div className="NavegacionTitulo">
              Navegación
          </div>
          

            {renderNaigationLinks()}
            
            
            
          
          
        </div>
        <div className="CenterFooter">
        <div className="NavegacionTitulo">
              Información
          </div>
          <div className='LinkFooterInf'>
          
            <Link  to="/">Términos y condciones</Link>
            
            <Link   to="/nosotras">Políticas de uso</Link>
            
          </div>

        </div>
        <div className="RightFooter">
        <div className="NavegacionTitulo">
              Contacto
          </div>
          <div className='LinkFooterNav'>
          
            <Link  to="/">Dirección: xxxxxx</Link>
            
            <Link   to="/nosotras">WhatsApp: xxxxxxx</Link>
          
            <Link  to="/contacto">Instagram: @xxxxxx</Link>
            
          </div>

        </div>
        {/* <div className="whatsapp-logo">
  <a href="https://api.whatsapp.com/send?phone=1156632971" target="_blank" rel="noopener noreferrer">
    <img src={require('./imagenes/whatsapp.png')} alt="WhatsApp Logo" />
  </a>
</div> */}
      </div>
    </div>
  )
}

export default Footer