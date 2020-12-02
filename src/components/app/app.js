import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../itemDetails';
import styled from "styled-components";
import { Button } from 'reactstrap';
//import CharacterPage from "../characterPage";
import gotService from "../../services/gotService";
import './app.css'
import ErrorMessage from "../errorMesage";
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';

export default class App extends Component{

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
        //selectedChar: 120
    }

    componentDidCatch(error, errorInfo) {
        console.log('error')
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar //вернет в стэйт фолс потом тру и покажет RandomChar (! + ! = true)
            }
        });
    }


    render() {
        const char = this.state.showRandomChar;
        if (this.state.error){
            return <ErrorMessage/>
        }
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row className="firstRow">
                        <Col lg={{size: 5, offset: 0}}>
                            {char ? <RandomChar/> : null}
                        </Col>
                        <Button color="primary"
                                onClick={this.toggleRandomChar}>Сменить персонажа</Button>{' '}
                    </Row>
                    <CharacterPage/>
                    {/*<Row>
                        <Col md='6'>
                            <ItemList
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name/*(
                                    <>
                                        <span>{item.name}</span>
                                        <button>Click me</button>
                                    </>)*!//>
                        </Col>
                        <Col md='6'>
                            <CharDetails
                                charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => `${item.name}`}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails
                                charId={this.state.selectedChar}/>
                        </Col>
                    </Row>*/}
                    <BooksPage/>
                    <HousesPage/>
                </Container>
            </>
        );
    }
};

