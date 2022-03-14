import React from "react";
class TodoHD extends React.Component {
    constructor() {
        super();
        this.input = React.createRef();
    }
    render() {
        return (
            <div className="todo-hd">
                <input className="input-field" type="text" placeholder="Enter tasks here" ref={this.input}/>
                <button className="btn-add" onClick={
                    ()=> {
                        this.props.addTodo(this.input.current.value);
                    }
                }>+</button>
            </div>
        );
    }
}

export default TodoHD;