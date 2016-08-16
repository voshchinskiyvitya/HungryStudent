/**
 * Created by User on 15.08.2016.
 */
import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);

        if(!!props.views){
            this.views = props.views;
            this.currentView = this.views[0];
        } else {
            throw Error("View for app wasn't defined.");
        }
    }

    switchToView(viewName){
        let view = this.views.find(view => view.name == viewName);
        if(!!view){
            this.currentView.close();
            this.currentView = view;
            this.currentView.open();
        } else {
            throw Error("View " + viewName + "does not find.");
        }
    }
}

export default App;