import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import  { TextoDados } from '../../components/Texto/Dados';
import ButtonSimples from '../../components/Button/Simples'
import TabelaSimples from '../../components/Tabela/Simples'

class DetalhesDoPedido extends Component {

    renderCabecalho(){
        return (
            <div  className="flex-2" >
                <div className="flex-1 flex" >
                    <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04/04/2021"></Titulo>
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples type="danger" label="Cancelar pedido" onClick={() => alert("Cancelado")} />
                </div>
            </div>
        )
    }

    renderDadosDoCliente(){
        return(
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados do cliente" />
                <br />
                <TextoDados chave="Nome" valor="Cliente 1" />
                <TextoDados chave="CPF"  valor="111.222.333-45"/>
                <TextoDados chave="Telefone" valor="11 1234-5678"/>
                <TextoDados chave="Data de Nascimento" valor="10/04/1997" />
            </div>
        )
    }

    renderDadosDaEntrega(){
        return(
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados de Entrega" />
                <br />
                <TextoDados chave="Endereco" valor="Rua teste, 123" />
                <TextoDados chave="Bairro"   valor="Centro"/>
                <TextoDados chave="Cidade" valor="Juazeiro do Norte"/>
                <TextoDados chave="Estado" valor="Ceara" />
                <TextoDados chave="CEP" valor="63020-140" />
            </div>
        ) 
    }

    renderDadosDePagamento(){
        return(
            <div className="flex-3">
                <Titulo tipo="h4" titulo="Dados de Pagamento" />
                <br />
                <TextoDados chave="Taxa de Entrega" valor="R$ 15,50 (PAC)" />
                <TextoDados chave="Valor do pedido"   valor="R$ 32,00"/>
                <TextoDados chave="Valor Total" valor="R$ 47,50"/>
                <TextoDados chave="Forma de pagamento" valor="BOLETO" />
            </div>
        ) 
    }

    renderDadosDoCarrinho(){
        const dados = [
            {
                "Produto": "Produto 1",
                "Preço Und.":"R$ 12,00",
                "Quantidade":"1",
                "Preço Total":"R$ 12,00"
            },
            {
                "Produto": "Produto 2",
                "Preço Und.":"R$ 10,00",
                "Quantidade":"2",
                "Preço Total":"R$ 20,00"
            },
        ]
        return(
            <div className="flex-3">
                <Titulo tipo="h4" titulo="Carrinho" />
                <br />
                <TabelaSimples
                    cabecalho={["Produto", "Preço Und.", "Quantidade", "Preço Total"]}
                    dados={dados}
                />
            </div>
        ) 
    }

    render(){
        return (
            <div className="Detalhes-do-pedido">
                {this.renderCabecalho() }
                <div className="flex vertical" >
                    <div className="flex horizontal" >
                        {this.renderDadosDoCliente() }
                        {this.renderDadosDoCarrinho()}
             
                    </div>
                    <div className="flex horizontal" >
                        {this.renderDadosDaEntrega()}
                        {this.renderDadosDePagamento()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetalhesDoPedido;