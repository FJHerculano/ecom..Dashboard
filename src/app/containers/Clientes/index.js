import React , {Component} from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples';

class Clientes extends Component{

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
                "E-mail": "cliente11@hotmail.com",
                "Telefone": "11 1234 9876",
                "CPF": "111.222.333-45",
                "botaoDetalhes":"/cliente/cliente11@hotmail.com"
            },
            {
                "Cliente":"cliente 2",
                "E-mail": "cliente22@hotmail.com",
                "Telefone": "11 8956 9865",
                "CPF": "111.888.333-45",
                "botaoDetalhes":"/cliente/cliente22@hotmail.com"
            },
            {
                "Cliente":"cliente 3",
                "E-mail": "cliente33@hotmail.com",
                "Telefone": "11 1234 9584",
                "CPF": "111.222.999-45",
                "botaoDetalhes":"/cliente/cliente33@hotmail.com"
            },
            {
                "Cliente":"cliente 4",
                "E-mail": "cliente44@hotmail.com",
                "Telefone": "11 1234 4785",
                "CPF": "555.222.333-45",
                "botaoDetalhes":"/cliente/cliente44@hotmail.com"
            },
        ]

        return (
            <div className="Clientes">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Clientes"/>
                    <br />
                    <Pesquisa 
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui por o nome do cliente..."}
                        onChange={(ev)=> this.onChangePesquisa(ev)} 
                        onClick={()=> alert("Pesquisar")}
                    />
                    <br />
                    <Tabela 
                        cabecalho={["Cliente", "E-mail", "Telefone", "CPF"]}
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

export default Clientes;
