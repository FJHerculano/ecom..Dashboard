import React from 'react';

export const TextoDados = ({ chave, valor, vertical = false }) =>(
    <div className={`Texto-Dados flex ${vertical ? "vertical" : "hotizontal"}`} >
        <strong className={`Texto-Dados flex ${!vertical ? "flex-center" : ""}`}>{chave}:&nbsp;</strong>
        <span >{valor}</span>
    </div>
)
