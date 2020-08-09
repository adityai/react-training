import React from "react"

class Todos extends React.Component {
    render() {
        return (
            <div>
                {props.todos.map(todo => (
                    <li key={todo.id}>{todo.titke}</li>
                ))}
            </div>
        );
    }
}
export default Todos