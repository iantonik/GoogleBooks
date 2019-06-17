import React, { Component } from "react";

import API from "../utils/API";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Input from "../components/Input";
import { BookDetail, BookListItem } from "../components/BookDetail";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"


class Search extends Component {

    state = {
        searchTerm: "",
        books: {}
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getBooks(this.state.searchTerm)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    handleBookSave = event => {
        API.saveBook({
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
        })
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
                                    <BookDetail>
                                        {this.state.books.map(volume => {
                                            return (
                                                <BookListItem
                                                    title={volume.volumeInfo.title}
                                                    author={volume.volumeInfo.authors}
                                                    image={volume.volumeInfo.imageLinks.thumbnail}
                                                    description={volume.volumeInfo.description}
                                                    previewLink={volume.volumeInfo.previewLink}
                                                    // handleBookSave={handleBookSave()}
                                                />
                                            )
                                        })}
                                    </BookDetail>
                                )}
                        </Col>
                    </Row>




                </Container>

            </div>


        )
    }
}

export default Search;