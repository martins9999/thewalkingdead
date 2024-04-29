import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Home from './pages/home/home';
import Fotos from './pages/fotos/fotos';
import Comentario from './pages/comentario/comentario';
import Info from './pages/info/info';

function App() {

    return (
        <>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contato' element={<Contato />}/>
                <Route path='/fotos' element={<Fotos/>}/>
                <Route path='/comentario' element={<Comentario/>}/>
                <Route path='/info' element={<Info/>}/>
            </Routes>
        </HashRouter>
        </>
    )
}

export default App;
