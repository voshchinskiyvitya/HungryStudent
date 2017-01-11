/**
 * Created by User on 16.08.2016.
 */

import View from './View';
import React from 'react';
import AutoComplete from './AutoComplete';

class ProductsView extends View{
    constructor(props){
        super(props);

        this.name = 'ProductsView';

        this.enteredProductName = '';

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

    onInputTextChange(event) {
        this.enteredProductName = event.target.value;
        if (this.enteredProductName.length > 2) {
            this.sentAutoCompleteRequest(event.target.value);
        }
    }

    render(){
        return(
            <div className="product-list-view">
                <AutoComplete onItemSelect={this.addNewProduct.bind(this)} url="/Products/GetProducts" />
                <div className="product-list">
                    <div>
                        {this.products}
                    </div>
                </div>
                <div className="recipes-view-switcher" onClick={this.switch.bind(this, this.props.products)}></div>
            </div>
        );
    }
}

export default ProductsView;