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
    const lastTodo = tasks[tasks.length - 1];
    tasks.push({
      id: lastTodo.id + 1,
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

  handleFilter = event => {
    this.setState({ showCompleted: event.target.checked });
  };

  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      return this.state.showCompleted || !task.completed;
    });
    return (
      <div>
        <h1>ToDo:</h1>

        <label>
          Include Completed{' '}
          <input
            type="checkbox"
            checked={this.state.showCompleted}
            onChange={this.handleFilter}
          />
        </label>
        <TaskList
          tasks={filteredTasks}
          showCompleted={this.state.showCompleted}
          onChange={this.handleChange}
          onDelete={this.handleDelete}
        />
        <TaskInput onAdd={this.handleAdd} />
      </div>
    );
  }
}
