/**
 * Created by User on 16.08.2016.
 */

import View from './View';
import React from 'react';

class ProductsView extends View{
    constructor(props){
        super(props);

        this.name = 'ProductsView';

        this.generateChildComponents();
    }

    generateChildComponents(){
        this.products = this.props.products.map((product, i) =>
            <div key={i}>
                {product.name}
            </div>
        );
    }

    addNewProduct(product){
        this.props.products.push(product);
        this.generateChildComponents();
        this.forceUpdate();
        this.componentDidUpdate();
    }


    render(){
        return(
            <div>
                <div>
                    {this.products}
                </div>
                <button onClick={this.addNewProduct.bind(this, {name: "prod"})}>
                    Add
                </button>
            </div>
        );
    }
}

export default ProductsView;