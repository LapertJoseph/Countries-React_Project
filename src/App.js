import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";    // import des méthode pour pouvoir créer les routes
import Home from './pages/Home'                                               // import des components
import About from './pages/About'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <Router>                                                                  {/* Balise router au dessus de toutes les autres */}
      <Routes>                                                                {/* Balise routes qui est Switch dans les ancienne versions */}
        <Route path="/" exact element={<Home />} />                           {/* Initialise la première route vers le component "Home" */}
        <Route path="/About" exact element={<About />} />                     {/* Initialise la deuxieme route vers le component "A propos" */}
        <Route path="*" element={<NotFound />} />                             {/* Initialise de la page 404 */}
      </Routes>
    </Router>
  );
};

export default App;                                                           