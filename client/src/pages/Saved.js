import React, { Component } from "react";

import API from "../utils/API";
import Nav from "../components/Nav";

import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import SavedBooks from "../components/SavedBooks"


class Saved extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    handleDelete = event => {
        event.preventDefault();
        let id = event.target.id
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Jumbotron />
                    <Row>
                        <Col classParams="col-md-12">
                            {!this.state.books.length ? (
                                <h1>Loading...</h1>
                            ) : (
                                    <SavedBooks
                                    books={this.state.books}
                                    handleDelete={this.handleDelete}
                                    />
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Saved;