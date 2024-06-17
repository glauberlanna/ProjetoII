import React from 'react'
import '../styles/anuncios.css'

import HomeSample from './HomeSample.json';
import figura007 from './figura007.jpg';

const Anuncios = () => {


    return (
        <div className="Anuncios">

        {
            HomeSample.map( anuncio => {
                return(
                    <div className="box" key={ anuncio.id }>
                        <strong>{anuncio.Titulo}</strong>
                        <br />
                        <img src="{anuncio.URLimg}"/>
                        <br />
                        { anuncio.Descricao } <br /><br />
                    </div>
                );                
            })
        }

        </div>
    )
}

export default Anuncios
