import React from 'react';
import AutoCompleteItem from './AutoCompleteItem';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.options = props;

        this.state = {
            keyWord: "",
            items: []
        };
    }

    getProducts(event){
        var partialKeyWord = event.target.value;
        $.ajax({
            url: this.options.url,
            data: { keyWord: partialKeyWord }
        }).done(result => {
            this.state = {
                keyWord: partialKeyWord,
                items: result
            };

            this.forceUpdate();
        });
    }

    onItemSelect(item){
        this.options.onItemSelect(item);
        this.state = {
            keyWord: "",
            items: []
        };

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <input className="auto-complete-input" value={this.state.keyWord} onChange={this.getProducts.bind(this)}/>
                <div className="auto-complete-list">
                    <ul>
                {this.state.items.map((item, i) => <AutoCompleteItem name={item.Name} id={item.Id} onClickCallBack={this.onItemSelect.bind(this)} key={i}/>)}
                    </ul>
                </div>
            </div>
            );
    }
}

export default AutoComplete;