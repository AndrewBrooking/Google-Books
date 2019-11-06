import React from "react";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "shards-react";

function AppNav() {
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
        </Navbar>
    );
}

export default AppNav;