import React from "react";

class TodoApp extends React.Component {

        state = {
            todos: [
                {
                    id: 1,
                    title: "Setup development environment",
                    completed: true
                },
                {
                    id: 2,
                    title: "Develop website and add content",
                    completed: false
                },
                {
                    id: 1,
                    title: "Deploy to live server",
                    completed: false
                }
            ]
        }
    render() {
        // Console.log(this.state.todos)
        return (
            <div>
                {this.state.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </div>
        );
    }
}
export default TodoApp;

