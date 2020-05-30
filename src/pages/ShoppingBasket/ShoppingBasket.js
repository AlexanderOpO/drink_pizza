import React, {useState, useEffect} from 'react';
import styles from './ShoppingBasket.module.scss'
import { connect } from 'react-redux'
import { updateUserState} from '../../actions/user'

const ShoppingBasket = props => {
    const [ products, setProducts ] = useState([])
    
    useEffect(() => {
        let products = Array.from(new Set(props.basket.map(el => el.title))).reduce((accum, el) => {
            console.log(!accum[el])
            if (!accum[el]) {
                const product = props.basket.find(product => product.title === el)
                const productInBasketAmount = props.basket.filter(product => product.title === el).length
                return {
                    ...accum,
                    [el]: {
                        ...product,
                        amount: productInBasketAmount,
                    }
                }
            }
        }, {})
        console.log(props.basket, products)
        products = Object.values(products)
        setProducts(products)
    }, [props.basket])

    const countSum = () => {
        return props.basket.reduce((accum, elem) => accum + elem.price, 0)
    }

    return (
        <div className={styles.root}>
            <div className={styles.products}>
                <span className={styles["products-title"]}>Товары в корзине:</span>
                <div className={styles["products-list"]}>
                    {
                        products.map(product => (
                            <div className={styles["products-list__item"]}>
                                <div className={styles["products-list__item-info"]}>
                                    <img src={product.photo} alt=""/>
                                    <span className={styles["products-list__item-info__title"]}>{product.title}</span>
                                </div>
                                <div className={styles["products-list__item-count"]}>
                                    <span>{ product.price * product.amount } р. X {product.amount} шт.</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <span className={styles.total}>Общая сумма: { countSum() } Р.</span>
        </div>
    );
}

const mapStateToProps = state => ({
    basket: state.basket
})

export default connect(mapStateToProps, { updateUserData: updateUserState })(ShoppingBasket);