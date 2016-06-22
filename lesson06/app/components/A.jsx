import React from 'react';
import AStyle from '../style/A.css';
import B from './B.jsx';

export default class Hello extends React.Component {
  render() {
    return (<h1 className={AStyle.red}>
    			Hello A
    			<B />
    		</h1>);
  }
}