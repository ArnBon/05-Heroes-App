import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';

import { HeroesApp } from './HeroesApp';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroesApp />    
  </React.StrictMode>
)
