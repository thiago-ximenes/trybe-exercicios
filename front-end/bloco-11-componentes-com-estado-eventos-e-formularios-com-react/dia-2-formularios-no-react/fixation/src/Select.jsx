import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <select>
        <option value={this.props.value}>{this.props.value}</option>
      </select>
    )
  }
}

export default Select