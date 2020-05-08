import React from 'react';
import S from './Salads.module.css'
import Salad from "./Salad/Salad";

const Salads = (props) => {
    let SaladsElements = props.Salads.map(s => <Salad id={s.id} photo={s.photo} title={s.title}
                                                      decription={s.description} price={s.price}/>);
    return (
        <div className={S.Sal}>
            <div className={S.Head}>
                Салаты
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    {SaladsElements}
                </div>
            </div>
        </div>

    )
};

export default Salads;