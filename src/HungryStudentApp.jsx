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
                <button onClick={this.switchToView.bind(this, 1)}>Switch</button>
                {this.currentView}
            </div>
        );
    }
}

export default HungryStudentApp;