'use strict';

function addColumn (ev) {
	ev.preventDefault()
	let table = this.state.table.slice()
	table.map(row => {
		row.push('')
		return row
	})
	this.setState({table: table})
}

function addRow (ev) {
	ev.preventDefault()
	let table = this.state.table.slice()
	let row = table[0].slice().map(c => '')
	table.push(row)
	this.setState({table: table})
}

function changeCell (rowIndex, columnIndex, ev) {
	let table = this.state.table.slice()
	table[rowIndex][columnIndex] = ev.target.value
	this.setState({table: table})
}

function focusCell (rowIndex, columnIndex) {
	this.setState({
		focused: [rowIndex, columnIndex]
	})
}

function blurCell () {
	this.setState({focused: null})
}

function removeRow (ev) {
	ev.preventDefault()
	let table = this.state.table.slice()
	if (table.length > 1) table.pop() && this.setState({table: table})
}

function removeColumn (ev) {
	ev.preventDefault()
	let table = this.state.table.slice()
	let length = table[0].length
	table.map(row => {
		if (row.length > 1) row.pop()
		return row
	})
	if (table[0].length < length) this.setState({table: table})
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
