import React, {Component} from 'react';
import './randomChar.css';
import gotService from "../../services/gotService";
import Spinner from '../spinner';
import ErrorMessage from "../errorMesage";

export default class RandomChar extends Component {

    /*constructor() {
        super();
        console.log('constructor');
    }*/

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false
    }
    //liveCicle хук
    componentDidMount() {
        console.log('mounting');
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 3500);
    }

    componentWillUnmount() {
        console.log('unmounting');
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        console.log('update');
        const id = Math.floor(Math.random()*140 + 25);
        //const id = 130000000000;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        console.log('render');
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;

        /*if (loading) {
            return <Spinner/>
        }*/
        const spinner = loading ? <Spinner/> : null,
            content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
//сделать так чтобы вместо пустых строк выводилось сообщение
const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born ? born : 'информация дополняется...'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died ? died : 'информация дополняется...'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture ? culture : 'информация дополняется...'}</span>
                </li>
            </ul>
        </>
    )
}