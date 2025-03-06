import { Routes, Route } from 'react-router-dom'; // import nommé
import './App.scss'

// 
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/accueil';  // La page d'accueil
import Faq from './pages/faq';  // La page FAQ
import Logement from './pages/logement';  // La page Logement
import NotFound from './pages/404'; // La page 404

function App() {
  //
  // comportement 
  return (
    
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Page d'accueil */}
          <Route path="/index" element={<Home />} />  {/* Page d'accueil */}
          <Route path="/faq" element={<Faq />} />  {/* Page FAQ */}
          <Route path="/logement/:id" element={<Logement />} />  {/* Page Logement */}
          <Route path="*" element={<NotFound />} />  {/* Page 404 pour toute autre URL */}
        </Routes>
      <Footer />
    </>
  )
}

export default App
