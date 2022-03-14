import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                    checked={this.props.data.done}
                    onChange={
                        () => {
                            const { id, done } = this.props.data;
                            this.props.updateHelper(id, !done);
                        }
                    } />
                <span className="title">{this.props.data.title}</span>
                <button
                    className="btn-delete"
                    onClick={
                        () => {
                            this.props.delHelper(this.props.data.id);
                        }
                    }>X</button>
            </div>
        );
    }
}

export default TodoItem;