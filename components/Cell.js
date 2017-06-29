'use strict';

const React = require('react');

class Cell extends React.Component {
  render () {
		let {cell, onChange, onFocus} = this.props
  	return (
  		<td className='cell'>
  			<input type='text' value={cell} onChange={onChange} onFocus={onFocus}/>
  		</td>
  	)
  }
}

module.exports = Cell;
