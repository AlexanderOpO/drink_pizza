import React from 'react';
import P from './Pizzas.module.css'
import Pizza from "./Pizza/Pizza";
import P1 from "@/assets/images/bavarskaya.jpg";

const Pizzas = (props) => {
    let PizzasElements = props.Pizzas.map(p => <Pizza id={p.id} photo={p.photo} title={p.title}
                                                       decription={p.description} price={p.price}/>);
    return (
        <div className={P.Piz}>
            <div className={P.Head}>
                Пиццы
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    {PizzasElements}
                </div>
            </div>
        </div>

    )
};

export default Pizzas;