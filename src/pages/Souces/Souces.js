import React from 'react';
import So from './Souces.modules.css'
import Souce from "./Souce/Souce";

const Souces = (props) => {
    let SoucesElements = props.Souces.map(so => <Souce id={so.id} photo={so.photo} title={so.title}
                                                      decription={so.description} price={so.price}/>);
    return (
        <div className={So.Sou}>
            <div className={So.Head}>
                Соусы
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    {SoucesElements}
                </div>
            </div>
        </div>

    )
};

export default Souces;