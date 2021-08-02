//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component
    //(1) State that it manages
    //(2) Lifecycle - fetching from API
    //(3) UI

class App extends React.Component {
    render() {
        return (
        <div>
            Hello Ryland!
            </div>
        )
    }
}

ReactDOM.render(
    //React Element
    //Where to render the Element to
    <App />, document.getElementById('app')
    )

export default App;