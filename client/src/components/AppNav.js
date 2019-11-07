import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    Button,
    FormInput
} from "shards-react";

function AppNav(props) {
    return (
        <Navbar type="dark" theme="primary" expand="sm">
            <NavbarBrand href="/">
                <h4 className="text-white my-1">Google Books</h4>
            </NavbarBrand>

            <Nav navbar>
                <NavItem>
                    <NavLink href="/api/books">
                        Saved
                    </NavLink>
                </NavItem>
            </Nav>

            <Nav navbar className="ml-auto w-50">
                <InputGroup size="md" seamless>
                    <InputGroupAddon type="append">
                        <Button theme="dark" onClick={props.onClick} className="rounded-right">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </InputGroupAddon>
                    <FormInput
                        type="search"
                        className="border-0 pl-3"
                        placeholder="Search..."
                        value={props.value}
                        onChange={props.onChange}
                    />
                </InputGroup>
            </Nav>
        </Navbar>
    );
}

export default AppNav;