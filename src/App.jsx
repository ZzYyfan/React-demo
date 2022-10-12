import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {
    todo: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: true },
    ],
  };
  // addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todo
    const { todo } = this.state;
    // 追加一个todo
    const newTodo = [todoObj, ...todo];
    // 更新状态
    this.setState({ todo: newTodo });
  };
  // updateTodo用于更新todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todo
    const { todo } = this.state;
    // 加工数据
    const newTodo = todo.map((item) => {
      if (item.id === id) return { ...item, done };
      else return item;
    });
    this.setState({ todo: newTodo });
  };
  // updateTodo用于删除todo对象
  deleteTodo = (id) => {
    // 获取原来的todo
    const { todo } = this.state;
    // 删除指定id的todo对象
    const newTodo = todo.filter((item) => {
      return item.id !== id;
    });
    // 更新状态
    this.setState({ todo: newTodo });
  };
  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    // 获取原来的todo
    const { todo } = this.state;
    // 加工数据
    const newTodo = todo.map((item) => {
      return { ...item, done };
    });
    // 更新状态
    this.setState({ todo: newTodo });
  };
  // clearAllDone所以清除已完成任务
  clearAllDone = () => {
    // 获取原有的todo
    const { todo } = this.state;
    // 过滤数据
    const newTodo = todo.filter((item) => {
      return !item.done;
    });
    // 更新状态
    this.setState({ todo: newTodo });
  };
  render() {
    const { todo } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todo={todo}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todo={todo}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
