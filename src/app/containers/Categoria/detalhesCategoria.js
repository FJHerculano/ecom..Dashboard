import React, { Component} from 'react';
import ButtonSimples from '../../components/Button/Simples';
import InputValor from '../../components/Inputs/InputValor';
import { TextoDados } from '../../components/Texto/Dados';
import Titulo from '../../components/Texto/Titulo';
import InputSelect from '../../components/Inputs/Select';
import Voltar from '../../components/Links/Voltar';


class DetalhesCategoria extends Component {

    state = {
        nome:"Categoria",
        disponibilidade: "disponivel,",
        codigo: "categoria",

    }

    renderCabecalho(){
        const { nome } = this.state;
        return(
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo={nome} />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples
                        onClick={()=> alert("Salvo!")}
                        type="success"
                        label="Salvar"
                    />     
                    <ButtonSimples
                        onClick={()=> alert("Removido!")}
                        type="danger"
                        label="Remover"
                    />                                       
                </div>
            </div>
        )
    }

    renderDados(){
        const { nome, disponibilidade, codigo} = this.state;
        return (
            <div >
                <TextoDados
                    chave="Código"
                    valor={(
                        <InputValor 
                            noStyle
                            name="codigo"
                            value={codigo}
                            handleSubmit={(valor) => this.setState({ codigo: valor })}
                        />

                    )}
                />
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor noStyle
                            name="nome"
                            value={nome}
                            handleSubmit={(valor) => this.setState({ nome: valor })}
                        />

                    )}
                />
                <br />
                <TextoDados
                    chave="Disponibilidade"
                    valor={(
                        <InputSelect
                            name="disponibilidade"
                            onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}
                            value={disponibilidade}
                            opcoes={[
                                { label:"Disponivel", value:"disponivel"},
                                { label:"Indisponivel", value:"indisponivel"},
                            ]}    
                        />
                    )}
                />     
            </div>
        )
    }

    render(){
        return (
            <div className="Detalhes-Categoria">
                <Voltar path="/categorias"/>
                {this.renderCabecalho()}
                {this.renderDados()}
            </div>
        )
    }
}

export default DetalhesCategoria;