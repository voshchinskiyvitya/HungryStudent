/**
 * Created by User on 15.08.2016.
 */
import React from 'react';
import App from './App.js';

class HungryStudentApp extends App{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.views}
            </div>
        );
    }
}

export default HungryStudentApp;