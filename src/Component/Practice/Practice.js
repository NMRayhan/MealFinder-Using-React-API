import React, { useEffect, useState } from 'react';
import ItemShowing from '../ItemShowing/ItemShowing';
import './Practice.css';

const Practice = () => {

    const [KeyWord, setKeyWord] = useState('')
    const [Meals, setMeals] = useState([])

    const HandleChange = event => {
        setKeyWord(event.target.value);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${KeyWord}`

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [KeyWord])
    return (
        <div className="search-meal-finder">
            <h1>Meal Finder</h1>
            <input type="text" onChange={HandleChange} placeholder="Search Somthing" />
            <div className="row align-items-center justify-content-start Meal-finder-container">
                {
                    <h1>Total Result : {Meals?.length || 0}</h1>
                }
                {
                    Meals?.map(meal => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <ItemShowing Meals={meal}></ItemShowing>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Practice;