import React from "react";
import "./style.css"


export function BookDetail(props) {
    return (
        <div>
            {props.books.map(book => (
                <li>
                    <div className="card mt-5 ">
                        <div className="card-body">

                            <button className="float-right mr-1" onClick={()=> window.open(`${book.link}`, "_blank")}>View</button>
                            <button className="float-right mr-1" id={book.key} onClick={(event) => props.handleBookSave(event)}>Save</button>
                            <h3>{book.title}</h3>
                            <h4>Written by: {book.author} </h4>
                            <img src={book.image} alt={book.title} className="img-thumbnail float-left mr-3"></img>
                            <div ><p>{book.description}</p></div>
                        </div>

                    </div>
                </li>
            ))}
            </div>
    )
}

export default BookDetail;
