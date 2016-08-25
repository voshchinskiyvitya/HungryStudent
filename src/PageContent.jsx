/**
 * Created by Вітя on 23.07.2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RecipesListView from './RecipesListView.js'
import ProductsView from './ProductsView'
import HungryStudentApp from './HungryStudentApp.js'


ReactDOM.render(<HungryStudentApp views={[new RecipesListView(),
                                          new ProductsView({ products: [{name: 'potatoe'}]})]} />, document.getElementById('content'));



