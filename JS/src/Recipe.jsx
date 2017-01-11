/**
 * Created by Вітя on 12.07.2016.
 */
import React from 'react';

class Recipe extends React.Component{
    render(){
        return(
            <div className="Recipe">
                <div className="title">{this.props.data.Name}</div>
                <img className="img-circle" src={this.props.data.Img}/>
                <div className="description">{this.props.data.Description}</div>
            </div>
        );
    }
}

export default Recipe;

