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
        <Card style={{ maxWidth: "500px" }} className="mx-auto my-3 float-left">
            <CardHeader>
                <a href={props.book.link}>
                    <h5>
                        {props.book.title}
                    </h5>
                </a>
            </CardHeader>

            <CardImg src={props.book.image} />

            <CardBody>
                <p>{props.book.description}</p>
                <br />
                <p>Authors: {props.book.authors}</p>
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