/**
 * Created by Вітя on 23.07.2016.
 */

import React from 'react';
import View from './View';
import Recipe from './Recipe'

class RecipesLіstView extends View{
    constructor(props){
        super(props);

        this.name = 'RecipesLіstView';

        this.state = {
            data: []
        };

        this.getRecipesData();
    }

    getRecipesData(){
        $.ajax({
            url: "http://fisherman.if.ua/recipes.php"
        }).done(result => {
            this.state = {
                data: JSON.parse(result)
            };

            this.forceUpdate();
            this.componentDidUpdate();
        });
    }

    render(){
        return(
            <div className="recipe-list">
                <div className="product-view-switcher"></div>
                <div className="RecipesList">
                    {this.state.data.map((rec, i) => <Recipe data={rec} key={i}/>)}
                </div>
            </div>
        );
    }
}

export default RecipesLіstView;