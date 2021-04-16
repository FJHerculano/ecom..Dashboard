import React from 'react';

const Paginacao = ({total, atual, limite, onClick})=>{
    const numeroPaginas = Math.ceil(total / limite);
    // const paginaAtual = Math.floor(atual/limite) + 1; 
    return(
        <div className="Paginacao flex horizontal">
            {
                [...Array(numeroPaginas).keys()].map((numero, idx)=>{
                    const numeroAtualDaPagina = numero * limite;
                    return (
                        <div className={`Paginacao-item ${numeroAtualDaPagina === atual ? "Paginacao-item-active" : ""}`}
                             onClick={()=> onClick(numeroAtualDaPagina)}
                             key={idx}
                             >
                            {numero + 1}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Paginacao;