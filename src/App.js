import { Routes, Route } from "react-router-dom";
import Site1 from './Site/Site1';
import Site2 from './Site/Site2';
import Site3 from './Site/Site3';
import Site4 from './Site/Site4';
import Site5 from "./Site/Site5";
import Site6 from "./Site/Site6";
import Site7 from "./Site/Site7";
import Site8 from "./Site/Site8";
import Header from './components/Header'
import { useState, createContext } from 'react'

import './App.css';
import Navigation from "./components/Navigation";

export const UserContext = createContext()

function App() {
  const [site, setSite] = useState();
  return (
    <div className='background'>
      <div className='container'>
        <UserContext.Provider value={{site, setSite}}>
        <Header />
        <Navigation />
        <div className='site'>
        <Routes>
          <Route exact path="/" element={<Site1 />} />
          <Route path="/2" element={<Site2 />} />
          <Route path="/3" element={<Site3 />} />
          <Route path="/4" element={<Site4 />} />
          <Route path="/5" element={<Site5 />} />
          <Route path="/6" element={<Site6 />} />
          <Route path="/7" element={<Site7 />} />
          <Route path="/8" element={<Site8 />} />
        </Routes>
        </div>
        </UserContext.Provider>
        </div>
      </div>
    
  );
}

export default App;
