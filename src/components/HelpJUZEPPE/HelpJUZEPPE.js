import React, {Component} from 'react';
import H from './HelpJUZEPPE.module.css'


class HelpJUZEPPE extends Component{
    constructor() {
        super();
        this.state ={
            Startbtn: true
        }
    }
 render() {
     return (
         <div className={H.all}>
             <h1>Помоги Джузеппе </h1>
             <div className={H.back}>
                 <img src="https://image.freepik.com/free-photo/_1368-2821.jpg"/>
                 <div className={H.text}>
                     О нет, мне нужно срочно <br/>
                     придумать мега-пиццу для своего босса<br/>
                     Нельзя его разочаровывать<br/>
                     Иначе он меня уволит((<br/>
                     Ты же мне поможешь в этом?
                 </div>
                 <div className={H.button}>
                     <button className={H.Start}>
                         Начать игру </button>
                 </div>
             </div>
         </div>

     )
 }
}

export default  HelpJUZEPPE;