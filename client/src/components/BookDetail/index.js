import React from "react";
import "./style.css"

export function BookDetail({ children }) {
    return (<ul>{children}</ul>)
}


export function BookListItem({
    title,
    author,
    image,
    description,
    previewLink
}) {
    return (
        <li>
            <div className="card mt-5 ">
                <div className="card-body">
                <button className="float-right mr-1" src={previewLink}>View</button>
            <button className="float-right mr-1">Save</button>
            <h3>{title}</h3>
            <h4>Written by: {author} </h4>
            <img src={image} alt={title} className="img-thumbnail float-left mr-3"></img>
            <div ><p>{description}</p></div>
                </div>

            </div>
            
        </li>
    )
}


