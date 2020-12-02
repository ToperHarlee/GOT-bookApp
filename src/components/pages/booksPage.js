import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorMessage from "../errorMesage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock";
import {Field} from "../itemDetails";


export default class BooksPage extends Component{

    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error){
            return <ErrorMessage/>
        }


        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}/>
        )
    }
}