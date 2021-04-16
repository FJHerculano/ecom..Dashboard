import { Component } from "react";
import ButtonSimples from "../../components/Button/Simples";
import InputValor from "../../components/Inputs/InputValor";
import InputSimples from "../../components/Inputs/Simples";
import { TextoDados } from "../../components/Texto/Dados";
import Titulo from "../../components/Texto/Titulo";

class Perfil extends Component{

    state = {
       nome:"Usuario teste",
       email:"usuario@test.com",
       telefone:"11 4569- 5647",

       senhaAntiga:"",
       novaSenha:"",
       confirmarNovaSenha:""
    }

    renderCabecalho(){
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Perfil"/>
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
        const { nome, telefone, email} = this.state;
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
                <TextoDados
                    chave="Telefone"
                    valor={(
                        <InputValor
                            value={telefone}
                            noStyle
                            name="telefone"
                            handleSubmit={(valor) => this.setState({telefone: valor})}
                        />
                    )}
                />
            </div>
        )
    }

    renderDadosSenhas(){
        const { senhaAntiga, novaSenha, confirmarNovaSenha} = this.state;
        return(
            <div className="dados-senha" >
                <InputSimples
                    type="password"
                    name="senha-antiga"
                    label="Senha Antiga"
                    value={senhaAntiga}
                    onChange={(ev) => this.setState({ senhaAntiga: ev.target.value })}
                />
                <InputSimples
                    type="password"
                    name="nova-senha"
                    label="Nova Senha"
                    value={novaSenha}
                    onChange={(ev) => this.setState({ novaSenha: ev.target.value })}
                />
                <InputSimples
                    type="password"
                    name="confirmar-nova-senha"
                    label="Confirmar Nova Senha"
                    value={confirmarNovaSenha}
                    onChange={(ev) => this.setState({ confirmarNovaSenha: ev.target.value })}
                />
            </div>
        )
    }

    render(){
        return (
            <div className="Perfil full-width">
                <div className="Card">
                    { this.renderCabecalho() }
                    <div className="flex horizontal" >
                        <div className="flex-1">
                            { this.renderDadosConfiguracao() }
                        </div>
                        <div className="flex-1">
                            { this.renderDadosSenhas() }
                        </div>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default Perfil;