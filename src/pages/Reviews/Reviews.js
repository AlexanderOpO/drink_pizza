import React from 'react';
import R from './Reviews.module.css'
import Review from "./Review/Review";


const Reviews = (props) => {
let ReviewsElements = props.Reviews.map(Q => <Review login={Q.login} photo={Q.photo} id={Q.id} Message={Q.Message}/>);
let NewReviewElement = React.createRef();

let addReview = () =>
{
let Text = NewReviewElement.current.value;
props.AddReview(Text);
};

let onReviewChanged = () =>
{
    let Text = NewReviewElement.current.value;
    props.updateNewReview(Text);
}

    return (
        <div className={R.Rew}>
            <br/>
            <div className={R.Rewsall}>
                {ReviewsElements}
            </div>
    <div className={R.TextAr}>
        <br/>
        <textarea name="comment" onChange={onReviewChanged} ref={NewReviewElement}
                  value={props.NewReviewElement}
                  placeholder="Написать отзыв" maxLength="1000" cols="50"
                  rows="6"/>
    </div>
    <div className={R.buttons}>
        <button type="reset">Отмена</button>
        &nbsp;
        <button onClick={addReview} type="submit">Добавить</button>
        </div>
            <br/>
            </div>
    )
};

export default Reviews;
