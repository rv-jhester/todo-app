import React, { Component } from 'react';

export default class Task extends Component {
  handleChange = e => {
    this.props.onChange(this.props.id, e.target.checked);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={this.handleChange}
        />
        <span>{this.props.text}</span>
        <button onClick={this.handleDelete}>x</button>
      </div>
    );
  }
}
