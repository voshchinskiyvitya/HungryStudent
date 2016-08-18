/**
 * Created by Вітя on 23.07.2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RecipesListView from './RecipesListView.js'
import ProductsView from './ProductsView'
import HungryStudentApp from './HungryStudentApp.js'

ReactDOM.render(<HungryStudentApp views={[<RecipesListView key={0}/>,
                                          <ProductsView products={[{name: 'chees'}, {name: 'potatoe'}]} key={1}/>
                                            ]} />, document.getElementById('content'));


