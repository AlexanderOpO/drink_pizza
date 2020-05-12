import React, {Component} from 'react';
import styles from './ShoppingBasket.module.scss'
 
const ShoppingBasket = () => {
        return (
            <div className={styles.ShoppingBasket}>
                <span className={styles.item}>Всего блюд в корзине: </span>
                
                <span className={styles.item}>Общая сумма:</span>
            </div>
        );
}
 
export default ShoppingBasket;