/**
 * Created by Вітя on 12.07.2016.
 */
import React from 'react';

class Recipe extends React.Component{
    render(){
        let style = {backgroundImage: 'url(' + this.props.data.img + ')'};
        
        return(
            <div className="Recipe">
                <div>{this.props.data.title}</div>
                <div className="img" style={style}></div>
                <div>{this.props.data.description}</div>
            </div>
        );
    }
}

export default Recipe;

