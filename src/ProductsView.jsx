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
            <div className="product-list-view">
                <div>
                    <div className="product-list">
                        {this.products}
                    </div>
                    <button onClick={this.addNewProduct.bind(this, {name: "prod"})}>
                        Add
                    </button>
                </div>
                <div className="recipes-view-switcher" onClick={this.switch}></div>
            </div>
        );
    }
}

export default ProductsView;