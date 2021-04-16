import React , {Component} from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples'
import Voltar from '../../components/Links/Voltar';


class Avaliacoes extends Component{

    render(){
  
        const dados = [
            {
                "Cliente":"cliente 1",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/G87468HJBEH"
            },
            {
                "Cliente":"cliente 2",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/J7453DSFHD"
            },
            {
                "Cliente":"cliente 3",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/LEJGUVF6T376"
            },
            {
                "Cliente":"cliente 4",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/I636NKDGF"
            },
            {
                "Cliente":"cliente 5",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/0JKENFY863"
            },
            {
                "Cliente":"cliente 6",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/LKSNG7486Y8"
            },
           
        ]

        return (
            <div className="Avaliacoes full-width">
                <div className="Card">
                <Voltar path="/produto/habfjh" />

                    <Titulo tipo="h1" titulo="Avaliaçoes - Produto 1"/>
                    <br />
                    
                    <br />
                    <Tabela 
                        cabecalho={["Cliente", "Data"]}
                        dados={dados}
                    />
                    
                </div>
            </div>
        )
    }
}

export default Avaliacoes;
