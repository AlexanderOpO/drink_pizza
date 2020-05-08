import React from 'react';
import styles from './About.module.scss'
import cooking from '@/assets/images/izgotovlenie.jpg'
import vegetables from '@/assets/images/veg.jpg'
import courier from '@/assets/images/curer.jpg'

const About = () => {
    return (
        <div className={styles.root}>
            <div className={styles.block}>
                <h1 className={styles.title}>О нас</h1>
                <div className={styles.item}>
                    <img src={cooking} alt="" />
                    <p>"Хочу наПицца" - это служба доставки вкусной и всегда свежей пиццы, салатов и десертов. Мы работаем над тем, чтобы наши блюда на заказ  были доступны каждому жителю Санкт-Петербурга. Мы работаем 24 часа в сутки. Наши сотрудники - это специализированные повара из лучших ресторанов Санкт-Петербурга! Вы всегда можете убедиться в том, что мы готовим только самую вкусную и высококачественную пиццу, оформив заказ по телефону 89812358233!</p>
                </div>
            </div>
            <div className={styles.block}>
                <h1 className={styles.title}>Почему именно мы?</h1>
                <div className={styles["item-container"]}>
                    <div className={styles.item}>
                        <img src={vegetables} alt="" />
                        <p>1. Мы используем в своих блюдах только самые свежие овощи, выращенных на наших собственных плантациях.</p>
                    </div>
                    <div className={styles.item}>
                        <img src={courier} alt="" />
                        <p>2. Максимальное время ожидания - 1 час, иначе мы вернём вам 50% от стоимости заказа.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
