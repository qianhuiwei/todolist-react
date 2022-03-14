import React from "react";
import TodoHD from "./TodoHD";
import TodoBD from "./TodoBD";
import TodoFT from "./TodoFT";

class App extends React.Component {
    state = {
        // todos: [
        //     { id: 1, title: "task1", done: false },
        //     { id: 2, title: "task2", done: false },
        //     { id: 3, title: "task3", done: true },
        //     { id: 4, title: "task4", done: false },
        //     { id: 5, title: "task5", done: true },
        //     { id: 6, title: "task6", done: false },
        // ],
        todos: [],
        type: 1 //1=all, 2=done, 3=not done
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>TODO LIST</h1>
                    <TodoHD addTodo={this.addItem} />
                </div>
                <div className="main">
                    <TodoFT type={this.state.type}
                        todoList={this.state.todos}
                        changeType={this.changeType} />
                    <TodoBD todoList={this.state.todos}
                        deleteItem={this.deleteItem}
                        updateItem={this.updateItem}
                        type={this.state.type} />
                </div>


            </div>
        );
    }

    addItem = (itemTitle) => {
        // console.log("item title ", itemTitle);
        this.setState({
            todos: [...this.state.todos, {
                id: new Date().getTime(),
                title: itemTitle,
                done: false
            }]
        });
    }

    deleteItem = (itemId) => {
        // console.log("delete ", itemId);
        const res = this.state.todos.filter(item => item.id !== itemId);
        this.setState({
            todos: res
        });
    }

    updateItem = (itemId, status) => {
        // console.log("id", itemId);
        // console.log("status", status);
        this.setState({
            todos: this.state.todos.map(
                item => item.id === itemId
                    ? { ...item, done: status }
                    : item
            )
        });
    }

    changeType = (type) => {
        // console.log("type ", type);
        this.setState({ type });
    }
}

export default App;