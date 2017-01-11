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

    getRecipesData(data) {
        var prodIds = !!data ? data.map(p => p.id).filter(id => !!id) : null;
        $.ajax({
            url: "/Recipes/GetRecipes",
            data: { productIds: prodIds },
            traditional: true
        }).done(result => {
            this.state = {
                data: result
            };

            this.forceUpdate();
            this.componentDidUpdate();
        });
    }

    open(data) {
        this.getRecipesData(data);
    }

    render(){
        return(
            <div className="recipe-list-view">
                <div className="product-view-switcher" onClick={this.switch}></div>
                <div className="recipe-list">
                    {this.state.data.map((rec, i) => <Recipe data={rec} key={i}/>)}
                </div>
            </div>
        );
    }
}

export default RecipesLіstView;