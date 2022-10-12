import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  // 对接收的props进行:类型、必要性的限制
  static propTypes = {
    todo: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todo, updateTodo, deleteTodo } = this.props;
    const arr = todo.map((item) => {
      return (
        <Item
          key={item.id}
          {...item}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      );
    })
    return (
      <ul className="todo-main">
        {arr}
      </ul>
    );
  }
}
