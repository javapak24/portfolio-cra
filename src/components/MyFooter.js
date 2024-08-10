import React from 'react'
import { Icon } from 'semantic-ui-react'

const MyFooter = () => (
  <div>
    <a href='https://facebook.com/'>
    <Icon bordered color='teal' link name='facebook' />
    </a>
    <a href='https://linkedin.com/'>
    <Icon bordered color='teal' link name='linkedin'/>
    </a>
    <a href='https://x.com/?lang=en'>
    <Icon bordered color='teal' link name='twitter'/>
    </a>
  </div>
)

export default MyFooter