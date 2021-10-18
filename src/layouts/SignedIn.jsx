import React from 'react'
import  { Dropdown, Image, Menu} from "semantic-ui-react"
function SignedIn(props) {
    return (
        <div>
          <Menu.Item>
              <Image avatar  spaced ="rigth"  src="http://camlaralti.k12.tr/files/ataturk.png"/>
              <Dropdown pointing = "top left" text = "Ferhan">
                  <Dropdown.Menu>
                  <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                  <Dropdown.Item onClick = {props.signOut} text = "Çıkış Yap" icon = "sign-out"/>
                  </Dropdown.Menu>

              </Dropdown>
          </Menu.Item>
        </div>
    )
}

export default SignedIn
