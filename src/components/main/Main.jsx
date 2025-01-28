import React from "react";
import './Main.css';
import Profile from '../../assets/gon.png'

const Main = () => {
    return ( 
        <>
            <section>
                <div className="content">
                    <h1 id="sobre">Sobre</h1>
                    <p>
                    <strong>Lopes Moda</strong> é uma loja de roupas femininas 
                    fundada em 2021 pela empreendedora Gonçala Lopes. Com paixão 
                    pela moda e um olhar apurado para tendências, a loja foi criada
                    para oferecer às mulheres peças modernas, elegantes e acessíveis, 
                    valorizando diferentes estilos e personalidades. Desde sua inauguração,
                    Lopes Moda tem se destacado por seu atendimento acolhedor e pela 
                    curadoria de roupas que combinam conforto e sofisticação, 
                    tornando-se um ponto de referência para quem busca se vestir bem 
                    e com confiança.
                    </p>
                </div>
                <div className="content_img">
                    <img src={Profile} id="profile" alt="profile"/>
                </div>
            </section>
        </>
     );
}
 
export default Main;