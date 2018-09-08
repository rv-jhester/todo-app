import React, { Component } from 'react';

import Task from './Task';

export default class TaskList extends Component {
  render() {
    if (!this.props.tasks) return null;

    const tasks = this.props.tasks.map(task => (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        completed={task.completed}
        onChange={this.props.onChange}
        onDelete={this.props.onDelete}
      />
    ));

    return <ul>{tasks}</ul>;
  }
}
