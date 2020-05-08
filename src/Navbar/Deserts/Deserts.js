import React from 'react';
import D from './Deserts.module.css'
import Desert from "./Desert/Desert";

const  Deserts = (props) => {
    let DesertsElements = props.Deserts.map(d => <Desert id={d.id} photo={d.photo} title={d.title}
                                                       decription={d.description} price={d.price}/>);
    return (
        <div className={D.Des}>
            <div className={D.Head}>
                Десерты
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    {DesertsElements}
                </div>
            </div>
        </div>

    )
};

export default  Deserts;