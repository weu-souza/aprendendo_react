import React from "react";
import './Produtos.css'
import Produto from "./Produto";
import produto from "./Produto";

const Produtos = () => {

    const produtos = [
        {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
        {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']}
    ];

    return (
        <section className={'produtos-container'}>
            <h1 className={'produtos-h1'}>Produtos</h1>
            {produtos.map((produto) => (<Produto key={produto.nome} {...produto}/>))}
        </section>
    );
}

export default Produtos;
