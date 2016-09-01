/**
 * Created by User on 16.08.2016.
 */


import React from 'react';
import View from './View';

class ProductsView extends View{
    constructor(props){
        super(props);

        this.name = 'ProductsView';

        this.generateChildComponents();
    }

    generateChildComponents(){
        this.products = this.props.products.map((product) =>
            <div>
                {product.name}
            </div>
        );
    }

    addNewProduct(product){
        this.props.products.push(product);
        this.generateChildComponents();
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.products}
                </div>
                <button>
                    Add
                </button>
            </div>
        );
    }
}

export default ProductsView;