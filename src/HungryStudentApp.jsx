/**
 * Created by User on 15.08.2016.
 */
import React from 'react';
import App from './App';
import RecipesListView from './RecipesListView';
import ProductsView from './ProductsView';

class HungryStudentApp extends App{

    constructor(props){
        var views = [
            new RecipesListView(),
            new ProductsView({
                products: [
                    {name: 'potatoe'}
                ]
            })
        ];

        super(props, views);

        var app = this;
        
        for(var i = 0; i < this.views.length; i++){
            this.views[i].componentDidUpdate = function(){
                app.forceUpdate();
            }
        }
    }

    render(){
        return(
            <div>
                {this.currentView.render()}
            </div>
        );
    }
}

export default HungryStudentApp;