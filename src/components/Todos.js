import React from "react"
import TodoItem from "./TodoItem"

class Todos extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo =>
                    <TodoItem key={TodoItem.id} todo={todo} />
                )
                }
            </div>

        );
    }
}
export default Todos