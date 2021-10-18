import React from "react";
import { Button, Menu } from "semantic-ui-react";

function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button primary>Kayıt Ol</Button>
        <Button primary style={{ marginLeft: "0.5em" }} onClick={props.signIn}>
          Giriş Yap
        </Button>
      </Menu.Item>
    </div>
  );
}

export default SignedOut;
