import React from 'react';
import { Icon } from 'semantic-ui-react';

const MyFooter = () => (
  <div>
    <a href="https://facebook.com/" target="_blank">
      <Icon bordered color="teal" link name="facebook" />
    </a>
    <a href="www.linkedin.com/in/muhammad-java24" target="_blank">
      <Icon bordered color="teal" link name="linkedin" />
    </a>
    <a href="https://x.com/?lang=en" target="_blank">
      <Icon bordered color="teal" link name="twitter" />
    </a>
  </div>
);

export default MyFooter;
