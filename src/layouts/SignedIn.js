import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut, bisey }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://res.cloudinary.com/hrmsfl/image/upload/v1622831665/qziqevmrzgwnoflj42if.png"
        />
        <Dropdown pointing="top" text="Furkan">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
