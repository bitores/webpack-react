import React from 'react';
import BStyle from '../style/B.less';

export default class Hello extends React.Component {
  render() {
    return <div className={BStyle.green}>Hello B</div>;
  }
}