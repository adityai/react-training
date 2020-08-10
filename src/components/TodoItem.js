import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <li className="todo-item">
                    <input type="checkbox" checked={this.props.todo.completed} onChange={() => console.log("Clicked")}></input>
                    {this.props.todo.title}></li>
            </div >
        );
    }
}

export default TodoItem;