import React, { Component } from "react";

import API from "../utils/API";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Input from "../components/Input";
import { BookDetail, BookListItem } from "../components/BookDetail";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"


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

   getBooks
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
                                    <BookDetail>
                                        {this.state.books.map(volume => {
                                            return (
                                                <BookListItem
                                                title={volume.title}
                                                author={volume.author}
                                                image={volume.image}
                                                description={volume.description}
                                                previewLink={volume.previewLink}
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

export default Saved;