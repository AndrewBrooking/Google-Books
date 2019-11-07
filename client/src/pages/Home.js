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
            <CardBody className="text-center">
                {
                    (props.searchResults.length > 0) ? 
                        props.searchResults.map(book => {
                        return <BookCard key={book.id} book={book} />
                    }): <span>No results to display.</span>
                }
            </CardBody>
        </Card>
    );
}

export default Home;