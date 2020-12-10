import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import gotService from '../../services/gotService';
import withData from "./withData";

//на хуках не получается переписать тк возникает ошибка Object(...) is not a function
/*const ItemList = ({onItemSelect, getData, renderItem}) => {

    const [itemList, updateList] = useState([]);

    useEffect(()=>{ // аналог componentDidMount()
        getData().then((data) => updateList(data))
    });


    const renderItems = (arr) => {
        return arr.map((item) => {
            const id = item.id;
            const label = renderItem(item);
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => onItemSelect(id)}
                >
                    {label}
                </li>
            )
        })
    }

    if(!itemList) {
        return <Spinner />
    }
    return (
        <ul className="item-list list-group">
            {renderItems(itemList)}
        </ul>
    );
}*/

export class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = this.props.renderItem(item);

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(id)}>
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
            </ul>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

//свойства по умолчанию
/*ItemList.defaultProps = {
    onItemSelected: () => {}
}
ItemList.propTypes = {
    onItemSelected: PropTypes.func,//проверяем что это функция
    //getData: PropTypes.array(PropTypes.object) --> проверка на пример (что пропс массив а в нем обьект)
}*/


const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters);


//f(1)(2);