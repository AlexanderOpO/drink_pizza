import React from 'react';
import D from './Drinks.module.css'
import Drink from './components/Drink/Drink'

const  Drinks = (props) => {
    let  DrinksElements = props.Drinks.map(d => <Drink id={d.id} photo={d.photo} title={d.title}
                                                       decription={d.description} price={d.price}/>);
    return (
        <div className={D.Dr}>
            <div className={D.head}>
                Напитки
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    {DrinksElements}
                </div>
            </div>
        </div>
    )
};

export default Drinks;