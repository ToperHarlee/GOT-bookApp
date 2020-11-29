import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from "styled-components";
import { Button } from 'reactstrap';
import CharacterPage from "../characterPage";

import './app.css'
import ErrorMessage from "../errorMesage";

export default class App extends Component{

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
                    <CharacterPage/>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};

