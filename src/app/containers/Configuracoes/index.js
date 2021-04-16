import { Component } from "react";
import ButtonSimples from "../../components/Button/Simples";
import InputValor from "../../components/Inputs/InputValor";
import ListaDinamicaSimples from "../../components/Listas/ListaDinamicaSimples";
import { TextoDados } from "../../components/Texto/Dados";
import Titulo from "../../components/Texto/Titulo";

class Configuracoes extends Component{

    state = {
        nome:  "Loja FaFa",
        CNPJ:  "11.123.456/0001-02",
        email: "atendimento@lojafafa.com",

        endereco: "Rua teste, 1",
        bairro: "Centro",
        cidade : "Juazeiro do norte",
        estado: "CE",
        cep:"12345-689",

        telefones:[
            "88 4569-9874",
            "88 1236-6547",
        ]
    }

    renderCabecalho(){
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Configuracoes"/>
                </div>
                <div className="flex-1 flex flex-end" >
                    <ButtonSimples 
                        type="success"
                        onClick={() => alert("Salvo")}
                        label={"Salvar"}
                    />
                </div>
            </div>
        )
    }

    renderDadosConfiguracao(){
        const { nome, CNPJ, email} = this.state;
        return(
            <div className="dados-configuracao" >
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome}
                            noStyle
                            name="nome"
                            handleSubmit={(valor) => this.setState({nome: valor})}
                        />
                    )}
                />
                <TextoDados
                    chave="CNPJ"
                    valor={(
                        <InputValor
                            value={CNPJ}
                            noStyle
                            name="CNPJ"
                            handleSubmit={(valor) => this.setState({CNPJ: valor})}
                        />
                    )}
                />
                <TextoDados
                    chave="E-mail"
                    valor={(
                        <InputValor
                            value={email}
                            noStyle
                            name="email"
                            handleSubmit={(valor) => this.setState({email: valor})}
                        />
                    )}
                />
            </div>
        )
    }

    renderDadosEndereco(){
        const { endereco, bairro, cidade, cep, estado} = this.state;
        return(
            <div className="dados-configuracao" >
                <TextoDados
                    chave="Endereco"
                    valor={(
                        <InputValor
                            value={endereco}
                            noStyle
                            name="endereco"
                            handleSubmit={(valor) => this.setState({endereco: valor})}
                        />
                    )}
                />
                <TextoDados
                    chave="Bairro"
                    valor={(
                        <InputValor
                            value={bairro}
                            noStyle
                            name="bairro"
                            handleSubmit={(valor) => this.setState({bairro: valor})}
                        />
                    )}
                />
                <TextoDados
                    chave="Cidade"
                    valor={(
                        <InputValor
                            value={cidade}
                            noStyle
                            name="cidade"
                            handleSubmit={(valor) => this.setState({cidade: valor})}
                        />
                    )}
                />
                <TextoDados
                chave="Estado"
                valor={(
                    <InputValor
                        value={estado}
                        noStyle
                        name="estado"
                        handleSubmit={(valor) => this.setState({estado: valor})}
                    />
                )}
                />
                <TextoDados
                    chave="CEP"
                    valor={(
                        <InputValor
                            value={cep}
                            name="cep"
                            noStyle
                            handleSubmit={(valor) => this.setState({cep: valor})}
                        />
                    )}
                />
                
            </div>
        )
    }

    onAdd = (valor) => {
        if(!valor) return;
        const { telefones } = this.state;
        this.setState({ telefones: [...telefones, valor] })
    }

    onRemove = (idx) => {
        if(!idx) return;
        const{ telefones } = this.state;
        this.setState({ telefones: telefones.filter((item, index) => index !== idx) })
    }

    renderTelefones(){
        const { telefones } = this.state;
        return (
            <div className="dados-telefones">
                <Titulo tipo="h3" titulo="Telefones"/>
                <ListaDinamicaSimples
                    dados={telefones}
                    onAdd={this.onAdd}
                    onRemove={this.onRemove}
                />
            </div>
        )
    }

    render(){
        return (
            <div className="Configuracoes full-width">
                <div className="Card">
                    { this.renderCabecalho() }
                    <div className="flex horizontal" >
                        <div className="flex-1">
                            { this.renderDadosConfiguracao() }
                        </div>
                    </div>
                    <br /><hr /><br/>
                    <div className="flex horizontal" >
                        <div className="flex-1">
                            { this.renderDadosEndereco() }
                        </div>
                        <div className="flex-1">
                            { this.renderTelefones() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Configuracoes;