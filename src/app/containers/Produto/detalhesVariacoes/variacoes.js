import React, {Component} from 'react';
import Titulo from '../../../components/Texto/Titulo';

class Variacoes extends Component {
    state = {
        variacaoSelecionada:"C8658765C",
        variacoes: [
            {nome: "P", id:"C8658765C"},
            {nome: "M", id:"F9846237F"}
        ]
    }
    render(){
        const { variacoes, variacaoSelecionada } = this.state;
        return(
            <div className="Variacoes flex vertical flex-center">
                <Titulo tipo="h2" titulo="Variações"/>
                {
                    variacoes.map((item, idx) => (
                        <div
                            onClick={() => this.setState({ variacaoSelecionada: item.id})} 
                            className={`flex flex-center variacao-item ${ variacaoSelecionada === item.id ? "variacao-item-ativa" : ""}`} >
                            <span>{item.nome}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Variacoes;