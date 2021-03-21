import React from 'react';
import './ItemShowing.css';
import { Confirm } from 'react-st-modal';
import Button from 'react-bootstrap/Button';

const ItemShowing = (props) => {
    console.log(props.Meals);
    const { strMeal, strMealThumb, strSource, strInstructions, strTags } = props.Meals
    console.log(strTags)
    return (
        <div className="meal-container">
            <div className="meal">
                <h2>{strMeal}</h2>
                <Button className="main-btn mb-3 prepare-btn" onClick={async () => {
                    const result = await Confirm(`${strInstructions}`, <h1>{strMeal}</h1>);
                    if(result){
                        //Nothing TO Show
                    }
                }}
                >Prepare This Meal</Button>
                <img className="meal-img" src={strMealThumb} alt="" />
            </div>
            <Button className="main-btn source-btn" target="_blank" href={strSource}>Source</Button>
        </div>
    );
};

export default ItemShowing;