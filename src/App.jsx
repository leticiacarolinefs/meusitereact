import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Novo from './pages/Novo'
import Sobre from './pages/Sobre'
import Erro404 from './pages/Erro404'
import Login from './pages/Login'
import Principal from './components/Principal';



export default function App() {
  const [logado, setLogado] = useState(false); //constante e o método (setLogado) pra trocar a constante
  const [usuarioID, setUsuarioID] = useState();


  function handleLogin() {
    setLogado(true);
    setUsuarioID(100);
  }
  function handleLogout() {
    setLogado(false);
    setUsuarioID(null);
  }

  return (

    <BrowserRouter>
      <Routes>
        {logado ?
          <>
            <Route path="/" element={<Principal usuarioID={usuarioID} onLogout= {handleLogout} />} >
              <Route index element={<Home />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/novo" element={<Novo />} />
              <Route path="/sobre/:id" element={<Sobre />} />
            </Route>


          </>
          :
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        }
        <Route path="*" element={<Erro404 />} />
      </Routes>

    </BrowserRouter>
  )
}


