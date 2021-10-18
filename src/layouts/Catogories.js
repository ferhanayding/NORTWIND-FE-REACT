import React from 'react'
import { Menu } from 'semantic-ui-react'


export default function Catogories() {
    return (
        <div>
      <Menu pointing vertical>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
      </Menu>
        </div>
    )
}
