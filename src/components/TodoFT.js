import React from "react";

class TodoFT extends React.Component {
    render() {
        const { todoList } = this.props;
        return (
            <div className="todo-ft">
                <button className="btn-filter" onClick={
                    () => {
                        this.props.changeType(1);
                        
                    }
                }>Show all ({todoList.length})
                </button>

                <button className="btn-filter" onClick={
                    () => {
                        this.props.changeType(2);
                        
                    }
                }>Show done ({todoList.filter(item => item.done).length})
                </button>
                
                <button className="btn-filter" onClick={
                    () => {
                        this.props.changeType(3);
                        
                    }
                }>Show todo ({todoList.filter(item => !item.done).length})</button>
            </div>
        )
    }
}

export default TodoFT;