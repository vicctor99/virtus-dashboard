import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';

import './styles/dark.scss';

import Home from './pages/Home/Home';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import New from './pages/New/New';
import Single from './pages/Single/Single';
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import Products from './pages/Products/Products';
import Calendar from './pages/Calendar/Calendar';


function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='/users/*'>
                <Route index element={<List/>} />
                <Route path=':userId' element={<Single/>}/>
                <Route path='new' element={<New inputs={userInputs} title='Adicionar Novo Usuário'/>} /> 
              </Route>
              <Route path='/products/*'>
                <Route index element={<Products/>}/>
                <Route path=':productId' element={<Single/>}/>
                <Route path='new' element={<New inputs={productInputs} title='Adicionar Novo Produto'/>}/>
              </Route>
                <Route path='/calendar/*'>
                <Route index element={<Calendar />}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
