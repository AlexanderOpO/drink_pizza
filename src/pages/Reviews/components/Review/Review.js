import React from 'react';
import  R1 from './Review.module.css'

const  Review = (props) => {
    return (
        <div className = {R1.Rew1}>
            <div className={R1.Rew2}>
             <img src={props.photo}/>
           <div className={R1.Log}>
            {props.login}
              </div>
            <br/>
            {props.Message}
            <hr/>
            </div>
            <br/>
        </div>
    )
};

export default  Review;
