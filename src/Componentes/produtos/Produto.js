import React from "react";
import './Produtos.css'

const Produto = ({nome, propriedades}) => {
    return <div className={'produtos-bg'}>
        <p className={'produtos-nome'}>{nome}</p>
        <ul>
            {propriedades.map((propriedades) => (
                <li className={'produtos-propriedades'}>{propriedades}</li>
            ))}
        </ul>
    </div>
}

export default Produto;
