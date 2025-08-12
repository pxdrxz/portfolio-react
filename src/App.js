import { BrowserRouter, Routes, Route } from "react-router-dom";     //import do <BrowserRouter>; <Routes>; <Route> do "react-router-dom"
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/rodape"

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} /> 
        <Route path="*" element={<div>Pagina nao encontrada</div>} />
      </Routes>
    
    <Rodape />
    </BrowserRouter>
  );
}

export default App;

// BrowserRouter, Routes, Route devem ser importados conforme são utilizados 
// -> <BrowserRouter>; <Routes>; <Route>
//<menu/> esta fixo no header da aplicacao independente se as paginas mudarem, pois o colocamos fora do roteador <routes>
//<Rodape> é o mesmo caso do <menu>, posicionado fora do roteador <routes> para assim estar presente em todas as paginas  