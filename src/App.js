import { BrowserRouter, Routes, Route } from "react-router-dom";     //import do <BrowserRouter>; <Routes>; <Route> do "react-router-dom"
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
        <Route index element={<Inicio />} />
        <Route path="SobreMim" element={<SobreMim />} /> 
      </Route>
       
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

/* 
Na Rota "/", a estrutura a ser renderizado é:

<PaginaPadrao>      
  <Inicio>        
</PaginaPadrao>

Na Rota "/SobreMim", a estrutura a ser renderizado é:

<PaginaPadrao>
  <SobreMim>
</PaginaPadrao>

Rota Pai-> <PaginaPadrao>
Rotas Filhas-> <Inicio>,<SobreMim> 
*/