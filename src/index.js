import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


/*class Example extends Component {
    render() {
        return this.props.children;
    }
}*/

ReactDOM.render(<App/>, document.getElementById('root'));