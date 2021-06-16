import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
          {cartItems.length > 0 && <CartSummary />}
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} bisey="1" />
          ) : (
            <SignedOut signIn={handleSignIn} />
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
