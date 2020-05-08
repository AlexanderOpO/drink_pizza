import React from 'react';
import Abb from './About.module.css'
import make from '@/assets/images/izgotovlenie.jpg'
import veg from '@/assets/images/veg.jpg'
import curer from '@/assets/images/curer.jpg'

const About = () => {
    return (
        <div className={Abb.Ab}>
            <br/>
            <h1>О нас</h1>
            <div className={Abb.Inf}>
                <p>
                    <img src={make}/>
                    "Хочу наПицца" - это служба доставки вкусной<br/> и всегда свежей пиццы, салатов и десертов. <br/>
                    Мы работаем над тем,
                    чтобы наши блюда на заказ <br/> были доступны каждому жителю Санкт-Петербурга. <br/>
                    Мы работаем 24 часа в сутки.<br/>
                    Наши сотрудники - это специализированные повара <br/>
                    из лучших ресторанов Санкт-Петербурга! <br/>
                    Вы всегда можете убедиться в том, <br/>
                    что мы готовим только самую вкусную и высококачественную пиццу,
                    <br/>
                    оформив заказ по телефону 89812358233!
                </p>
                <br/>
                <br/>
                <h1>Почему именно мы?</h1>
              <div className={Abb.Veg}>
                  <img src={veg}/>
                  <p>
                      1.Мы используем в своих блюдах <br/>
                      только самые свежие овощи, <br/>
                      выращенных на наших собственных  <br/>
                      плантациях.
                  </p>
                  </div>
                <br/>
                <br/>
                <div>
                <img src={curer}/>
                <p>
                    2. Максимальное время ожидания
                    <br/>- 1 час, иначе мы вернём вам 50% <br/>от
                    стоимости заказа.
                </p>
            </div>
            </div>
        </div>
    )
};

export default About;