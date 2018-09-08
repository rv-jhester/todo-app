import React, { Component } from 'react';

import TaskInput from './TaskInput';
import TaskList from './TaskList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, text: 'finish todo app', completed: false },
        { id: 2, text: 'take out trash', completed: true },
      ],
      showCompleted: true,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(text) {
    const tasks = this.state.tasks.slice();
    tasks.push({
      id: 7,
      text,
      completed: false,
    });

    this.setState({ tasks });
  }

  handleChange(id, checked) {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = checked;
      }

      return task;
    });

    this.setState({ tasks });
  }

  handleDelete(id) {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });

    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <h1>ToDo:</h1>

        <label>
          View Completed <input type="checkbox" checked={false} />
        </label>
        <TaskList
          tasks={this.state.tasks}
          showCompleted={this.state.showCompleted}
          onChange={this.handleChange}
          onDelete={this.handleDelete}
        />
        <TaskInput onAdd={this.handleAdd} />
      </div>
    );
  }
}
