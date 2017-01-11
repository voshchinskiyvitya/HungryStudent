import React from 'react';

class AutoCompleteItem extends React.Component {
    constructor(props){
        super(props);

        this.options = props;
    }

    onClick(item){
        this.options.onClickCallBack(item);
    }

    render() {
        return (
            <li onClick={this.onClick.bind(this, {name: this.props.name, id: this.props.id})}>
                <div>{this.props.name}</div>
            </li>
            );
    }
}

export default AutoCompleteItem;