/**
 * Created by Вітя on 23.07.2016.
 */

import React from 'react';
import Recipe from './Recipe.js'

class RecipesLіst extends React.Component{
    constructor(){
        super();

        this.state = {
            data: []
        }

        this.getRecipesData();
    }


    getRecipesData(){
        $.ajax({
            url: "http://localhost:80/index.php"
        }).done(result => {
            this.state = {
                data: JSON.parse(result)
            };

            this.forceUpdate();
        });
    }

    render(){
        return(
            <div className="RecipesList">
                {this.state.data.map((rec, i) => <Recipe data={rec} key={i}/>)}
            </div>
        );
    }
}

export default RecipesLіst;