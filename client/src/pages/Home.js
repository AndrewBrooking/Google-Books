import React from "react";
import BookCard from "../components/BookCard";

import {
    Card,
    CardHeader,
    CardBody
} from "shards-react";

function Home(props) {
    return (
        <Card className="mt-5">
            <CardHeader>
                <h4>Search Results</h4>
            </CardHeader>
            <CardBody>
                {props.books.map(book => {
                    return <BookCard book={book} />
                })}
            </CardBody>
        </Card>
    );
}

export default Home;