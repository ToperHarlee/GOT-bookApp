import React, {Component} from 'react';
import './itemList.css';
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMesage";


export default class ItemList extends Component {

    //gotService = new gotService();

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            //получать уникальный идентификатор обьектов
            //сделать ф-ю возвращающую id из item добавить в сервис значение id у которго значение будет эта функця(там где культура ,имя итд)
            let {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
                {/*<li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>*/}
            </ul>
        );
    }
}