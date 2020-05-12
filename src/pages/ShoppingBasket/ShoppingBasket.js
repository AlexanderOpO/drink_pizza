import React, {Component} from 'react';
import styles from './ShoppingBasket.module.scss'
 
const ShoppingBasket = () => {
        return (
            <div className={styles.ShoppingBasket}>
                <span>Всего блюд в корзине: </span>
                <br/>
                <span>Общая сумма:</span>
            </div>
        );
}
 
export default ShoppingBasket;