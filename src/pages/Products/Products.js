import React, { useState } from 'react'
import styles from './Products.module.scss'
import {connect} from 'react-redux';
import {addBasket} from '../../actions/addAction.js';

const Products = props => {
    console.log(props);  
    return (
        <div className={styles.root}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles["item-container"]}>
                {
                    props.productsList.map((product, index) => (
                        <div className={styles.item}>
                            <div className={styles["item-image__container"]}>
                                <img src={product.photo} alt="" className={styles["item-image"]} />
                            </div>
                            <div className={styles["item-desc"]}>
                                <div className={styles["item-desc__sign"]}>
                                    <p className={styles["item-desc__sign-name"]}>{product.title}</p>
                                    <p className={styles["item-desc__sign-price"]}>{product.price} р.</p>
                                </div>
                                <p className={styles["item-desc__text"]}>{product.description ? product.description.slice(0, 100) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sapiente hic! Inventore adipisci pariatur deserunt enim! Officiis consectetur, numquam optio hic dolore voluptatum nisi praesentium sapiente sunt maiores, illo aliquid.".slice(0, 100)}</p>

                                <span className={styles["item-desc__add"]} onClick={props.addBasket}>
                                    Добавить в корзину</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default connect (null,{addBasket})(Products)