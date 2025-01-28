import React from 'react';
import './Services.css';
import Img1 from '../../assets/spring-wardrobe-switch-still-life-removebg-preview.png';
import Img2 from '../../assets/beautiful-dark-skinned-young-female-with-cheerful-expression-holds-smart-phone-credit-card-banks-online-makes-shopping-while-sits-against-cafe-interior.jpg';
import Img3 from '../../assets/medium-shot-woman-talking-phone.jpg';

const Services = () => {
    return (
        <>
            <section id='sec'>
                <div>
                    <h1 id='serv'>Conheça nossos serviços</h1>
                    <div id='services'>
                        <div className='service'>
                            <img src={Img1} alt='img1'/>
                            <p>Venda de roupas femininas</p>
                        </div>
                        <div className='service'>
                            <img src={Img2} alt='img1'/>
                            <p>Pagamento Online</p>
                        </div>
                        <div className='service'>
                            <img src={Img3} alt='img1'/>
                            <p>Atendimento personalizado</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;