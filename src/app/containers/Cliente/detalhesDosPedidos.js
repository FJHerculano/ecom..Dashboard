import React , {Component} from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';

import Tabela from '../../components/Tabela/Simples'

class DetalhesDosPedidos extends Component{

    render(){

        //DADOS
        const dados = [
            {
                "ID":"68456d4f6ew84df86ed4vrcf7r",
                "Valor Total": 100.00,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes":"/pedido/68456d4f6ew84df86ed4vrcf7r"
            },
            {
                "ID":"68456d4f6ew84d584877dfer7df",
                "Valor Total": 78.00,
                "Data": moment().toISOString(),
                "Situação": "Pagamento concluido",
                "botaoDetalhes":"/pedido/68456d4f6ew84d584877dfer7df"
            },
        ];

        return (
            //  se quiser preencher toda tela adicionar full-width (eu não gostei)
            <div className="Detalhes-dos-Pedidos">
                <div className="Card">
                <Titulo tipo="h3" titulo="Pedidos Feitos"/>
                       <br />
                       <Tabela 
                           cabecalho={["ID", "Valor Total", "Data", "Situação"]}
                           dados={dados}
                       />
                </div>
                
               
            </div>
        )
    }
}

export default DetalhesDosPedidos;
