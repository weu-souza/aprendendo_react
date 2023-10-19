import React from "react";
import './App.css';
import Header from "./Componentes/header/Header";
import produtos from "./Componentes/produtos/Produtos";
import home from "./Componentes/Home/Home";


function App() {
    let Pagina;
    const {pathname} = window.location;
    if (pathname === '/produtos') {
        Pagina = produtos;
    } else {
        Pagina = home;
    }
    return (
        <div>
            <Header/>
            <Pagina/>

        </div>
    );
}

export default App;
