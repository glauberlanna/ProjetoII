import React from 'react'
import NavegacaoLogado from '../components/NavegacaoLogado';
import NavegacaoPainel from '../components/NavegacaoPainel';
import '../styles/PainelNovo.css'

const PainelNovo = () => {
    return (
        <div>
            <NavegacaoLogado />
            <NavegacaoPainel />
            <div className="NovaPublicacao">
                <h1>Nova Publicação</h1>

                <div className="NpubItem">
                <label htmlFor="Titulo">Título</label>
                <input type="text"/>
                </div>

                <div className="NpubItem">
                <label htmlFor="Imagem">Imagem</label>
                <input type="image"/>
                </div>

                <div className="NpubItem">
                <label htmlFor="Descricao">Descrição</label>
                <input type="text"/>
                </div>

                <div className="NpubItem">
                <input type="submit" value="submit"/>
                </div>
            </div>


        </div>
    )
}

export default PainelNovo
