import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import ItemDetails, {Field} from "../itemDetails";
import RowBlock from "../rowBlock";

export class BooksPage extends Component {
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

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        /*const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks()}
                renderItem={({name}) => name}
            />
        )

        const itemDetails = (
            <ItemDetails>
                itemId={this.state.selectedBook}
                getData={this.gotService.getBook}
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )*/


        return (
            <ItemList 
                onItemSelected={(itemId) => {
                this.props.history.push(itemId)//history получаем как пропс при помощи withrouter
            }}
                getData={this.gotService.getAllBooks}
                renderItem={(book) => `${book.name} (book date release ${book.released})`}
            />
        /*<RowBlock left={itemList} right={itemDetails}/>*/
        )
    }
}
export default withRouter(BooksPage);