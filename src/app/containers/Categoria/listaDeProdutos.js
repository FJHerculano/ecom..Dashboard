import React , {Component} from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples';

class ListaDeProdutos extends Component{

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
                "Produto":"Mouse",
                "Estoque": 20,
                "Disponibilidade":"sim",
                "botaoDetalhes":"/produto/132164dea4fce6dsa",
            }, 
            {
                "Produto":"Mouse 2",
                "Estoque": 20,
                "Disponibilidade":"nao",
                "botaoDetalhes":"/produto/1rgedgvfedsgv45a",
            },
            {
                "Produto":"Mouse 3",
                "Estoque": 20,
                "Disponibilidade":"nao",
                "botaoDetalhes":"/produto/654gfjh8rtfdsa",
            },
            {
                "Produto":"Mouse 4" ,
                "Estoque": 20,
                "Disponibilidade":"sim",
                "botaoDetalhes":"/produto/68r7g89dedbdsa",
            },
        ]

        return (
            <div className="ListaDeProdutos ">
            <br/> <hr /> 
                <div >  
                    <Titulo tipo="h1" titulo="Produtos da categoria"/>
                    <br />
                    <Pesquisa 
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui por o nome do produto ou descrição..."}
                        onChange={(ev)=> this.onChangePesquisa(ev)} 
                        onClick={()=> alert("Pesquisar")}
                    />
                    <br />
                    <Tabela 
                        cabecalho={["Produto", "Estoque", "Disponibilidade"]}
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

export default ListaDeProdutos;
