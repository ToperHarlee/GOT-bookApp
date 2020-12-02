import React, {Component} from 'react';
import gotService from "../../services/gotService";
import ItemDetails from "../itemDetails";
import {Field} from "../itemDetails";

export default class BooksItems extends Component {
    gotService = new gotService();

    render() {
        return (
            <ItemDetails itemId={this.props.bookId}
                         getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}










