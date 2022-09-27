import React from 'react';
import ReactDOM from 'react-dom/client';
import { Banner } from './Componente/Banner.js';
import {Camilo} from './Componente/Camilo.js';
import { Menu } from './Componente/Menu.js';
import { Sinopsis } from './sinopsis/Sinopsis.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu></Menu>
    <Banner/>
    <Sinopsis/>
    
  </React.StrictMode>
);

