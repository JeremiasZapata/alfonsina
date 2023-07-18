import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Footer.css'
import imagotipo from "../assets/Imagotipo-6.png"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp (3).svg"



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
      
      
      <Link className="navbar-brand-footer" to={"/"}> <img className='imagotipo' src={imagotipo} alt="logo Alfonsina" /> </Link>
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
          <div className='LinkFooterCont'>
          
            <Link  to="/">Dirección: xxxxxx</Link>
            
            <div className='LogoRedes'>
            <Link className="instagram-logo" to={"/"}> <img className='img-instagram' src={instagram} alt="logo Instagram"/> </Link>
            <Link className="logoMarginWhatsap" to={"https://api.whatsapp.com/send?phone=1156632971"} target="_blank" rel="noopener noreferrer"> <img className='img-whatsapp' src={whatsapp} alt="logo Instagram"/> </Link>
            </div>
            
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

