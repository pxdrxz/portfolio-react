import { BrowserRouter, Routes, Route } from "react-router-dom";     //import do <BrowserRouter>; <Routes>; <Route> do "react-router-dom"
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// BrowserRouter, Routes, Route devem ser importados conforme são utilizados 
// -> <BrowserRouter>; <Routes>; <Route>
//<menu/> esta fixo no header da aplicacao independente se as paginas mudarem, pois o colocamos fora do roteador <routes>