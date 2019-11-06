import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Card,
    CardTitle,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput
} from "shards-react";

function Home() {
    return (
        <div>
            <Card className="text-center mx-auto my-3">
                <CardBody>
                    <CardTitle>Google Books</CardTitle>

                    <InputGroup size="md" seamless>
                        <InputGroupAddon type="append">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..." />
                    </InputGroup>
                </CardBody>
            </Card>
        </div>
    );
}

export default Home;