import React , {Component} from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples';

class Pedidos extends Component{

    state = {
        pesquisa:"",
        atual:0
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value })

    changeNumeroAtual= (atual) => this.setState({ atual });

    render(){
        const { pesquisa } = this.state;

        //DADOS
        const dados = [
            {
                "Cliente":"cliente 1",
                "Valor Total": 100.00,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes":"/pedido/68456d4f6ew84df86ed4vrcf7r"
            },
            {
                "Cliente":"cliente 2",
                "Valor Total": 78.00,
                "Data": moment().toISOString(),
                "Situação": "Pagamento concluido",
                "botaoDetalhes":"/pedido/68456d4f6ew84d584877dfer7df"
            },
        ];

        return (
            //  se quiser preencher toda tela adicionar full-width (eu não gostei)
            <div className="Pedidos">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Pedidos"/>
                    <br />
                    <Pesquisa 
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui por o nome do cliente..."}
                        onChange={(ev)=> this.onChangePesquisa(ev)} 
                        onClick={()=> alert("Pesquisar")}
                    />
                    <br />
                    <Tabela 
                        cabecalho={["Cliente", "Valor Total", "Data", "Situação"]}
                        dados={dados}
                    />
                    <Paginacao 
                        atual={this.state.atual} 
                        total={120} 
                        limite={20} 
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}/>
                </div>
            </div>
        )
    }
}

export default Pedidos;
