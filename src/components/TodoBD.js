import React from "react";
import TodoItem from "./TodoItem";

class TodoBD extends React.Component {
    render() {
        const { todoList, type, deleteItem, updateItem } = this.props;

        const createList = (list) => {
            const result = list.map(item => {
                return (
                    <TodoItem
                        key={item.id}
                        data={item}
                        delHelper={deleteItem} 
                        updateHelper={updateItem}/>
                )
            })
            return result;
        }
        
        const renderContent = () => {
            if (type === 1) {
                return createList(todoList);
            } 
            if (type === 2) {
                return createList(todoList.filter( item => item.done));
            }
            if (type === 3) {
                return createList(todoList.filter(item => !item.done));
            }
        }

        return (
            <div>{renderContent()}</div>
        );
    }
}

export default TodoBD;