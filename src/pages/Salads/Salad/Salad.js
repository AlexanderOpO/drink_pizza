import React from 'react';
import './Salad.css'

const Salad = (props) => {
    return (
        <div className="Pi col-md-3">
            <div className="card">
                <div className="card-img">
                    <img align="center" src={props.photo} className="img-fluid"/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">
                        {props.decription}
                        <br/>
                        Цена: {props.price}
                    </p>
                </div>
                <div className="card-footer">
                    <a href="" className="card-link">Добавить в корзину</a>
                </div>
            </div>
        </div>

    )
};

export default Salad;