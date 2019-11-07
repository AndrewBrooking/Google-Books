import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardFooter
} from "shards-react";

function BookCard(props) {
    return (
        <Card style={{ maxWidth: "400px" }} className="float-left w-25 my-3">
            <CardHeader>
                <a href={props.book.selfLink}>
                    <h5>
                        {props.book.volumeInfo.title}
                    </h5>
                </a>
            </CardHeader>

            <CardImg src={props.book.volumeInfo.imageLinks.thumbnail} className="rounded mx-auto" />

            <CardBody>
                <p>{props.book.volumeInfo.description.substring(0, 1500)}</p>
                <p>Author(s): {props.book.volumeInfo.authors}</p>
            </CardBody>

            <CardFooter>
                {
                    // TODO: Buttons
                }
            </CardFooter>
        </Card>
    );
}

export default BookCard;