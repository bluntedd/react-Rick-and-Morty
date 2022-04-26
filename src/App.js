import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Personagem from './pages/Personagens/Personagem';
import EpisodiosDetalhes from './pages/Episodios/EpisodiosDetalhes';
import PersonagemDetalhes from './pages/Personagens/PersonagemDetalhes';



function App() {
  return (
    <div> 
    <BrowserRouter>
    <Menu/> 
    <Routes>

    <Route path="/personagem" element={<Personagem/>} />
    <Route path="/episodios/:id" element={<EpisodiosDetalhes/>} />
    <Route path="/personagens/:id" element={<PersonagemDetalhes/>} />
    






    </Routes>
    </BrowserRouter>
    </div>

);
}







export default App;
