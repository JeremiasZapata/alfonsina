import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "materialize-css"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';

import Footer from './pages/footer/Footer';
import { NavBar } from './pages/navbar/NavBar';
import { HomePage } from './pages/homePage/HomePage';
import { Contacto } from './pages/contacto/Contacto';
import { Cursos } from './pages/cursos/Cursos'
import { SobreNosotras } from './pages/sobreNosotras/SobreNosotras';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/cursos" element={<Cursos/>}/>
          <Route path="/nosotras" element={<SobreNosotras/>}/>
          <Route path="*" element={<HomePage />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
