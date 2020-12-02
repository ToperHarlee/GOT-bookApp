import React, {Component} from 'react';
import './charDetails.css';
import gotService from "../../services/gotService";

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field] ? item[field] : 'информация дополняется...'}</span>
        </li>
    )
}

export {Field}

export default class ItemDetails extends Component {

    //gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateItem()
    }
    //сделать отвязку от персонажа наподобие 
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem () {
        const {itemId, getData} = this.props;
        if(!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
        //this.foo.bar = 0;
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Выберите персонажа</span>
        }
        const {item} = this.state;
        const {name, gender, born, died, culture} = item;

        return (
            <div className="char-details rounded">
                <h4>{name ? name : 'информация дополняется...'}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children,
                            (child) => {
                                return React.cloneElement(child, {item})
                            })
                    }
                    {/*<li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender ? gender : 'информация дополняется...'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born ? born : 'информация дополняется...'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died ? died : 'информация дополняется...'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture ? culture : 'информация дополняется...'}</span>
                    </li>*/}
                </ul>
            </div>
        );
    }
}