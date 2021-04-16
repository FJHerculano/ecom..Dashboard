import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Button from '../../components/Button/Simples';

class RecuperarSenha extends Component {

    state = {
        email:"",
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value});

    render(){
        const {email} = this.state;
        return (
            <div className="Recuperar-Senha  flex flex-center">
                <div className="Card">
                    <div className="flex flex-center">
                        <Titulo tipo="h1" titulo="Blau blau"/>
                    </div>
                <br/>
                    <div>
                        <p> Para redefinir sua senha, digite por favor o email</p>
                        <p> Iremos enviar um Link para você acessar e entrar com uma nova senha</p>
                    </div>
                <br/>
            <div>
                <Input
                    label="E-mail"
                    value={email}
                    onChange={(ev)=> this.onChangeInput("email", ev)}
                    type="email"
                />
            </div>
            <br/>
                <div className="flex flex-center">
                    <Button 
                        type="success" 
                        rota="/resetar-senha/1" 
                        label="Resetar Senha"
                    />
                </div>
                </div>
            </div>
        )
    }
}

export default RecuperarSenha; 