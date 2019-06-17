import React, { Component } from "react";

import API from "../utils/API";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Input from "../components/Input";
import BookDetail from "../components/BookDetail";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"




class Search extends Component {

    state = {
        searchTerm: "",
        books: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.searchTerm)
            .then(res => {
                let results = res.data.items;
                results = results.map(result => {

                    result = {
                        key: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                this.setState({ books: results })
            })
            .catch(err => console.log(err));
    };

    handleBookSave = event => {
        event.preventDefault();
        let book = this.state.books.filter( x => x.key === event.target.id);
        API.saveBook(book[0])
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Jumbotron />
                    <Row>
                        <Col classParams="col-md-12">
                            <Input
                                name="searchTerm"
                                value={this.state.recipeSearch}
                                onChange={this.handleInputChange}
                                placeholder="Title of a book"
                            />
                            <Button
                                onClick={this.handleFormSubmit}
                                type="button"
                                className="btn-outline-info float-right"
                            >Search
                             </Button>
                        </Col>

                    </Row>
                    <Row>
                        <Col classParams="col-md-12">
                            {!this.state.books.length ? (
                                <h1>Pending Search ...</h1>
                            ) : (
                                <BookDetail
                                    books={this.state.books}
                                    handleBookSave={this.handleBookSave}
                                ></BookDetail>
                                )}
                        </Col>
                    </Row>




                </Container>

            </div>


        )
    }
}

export default Search;