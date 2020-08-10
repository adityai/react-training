import React from "react";
import Header from "./Header.js"
import Todos from "./Todos.js"

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
    handleChange = () => {
        console.log("clicked");
    };
    render() {
        // Console.log(this.state.todos)
        return (
            <div className="container">
                <Header />
                <Todos todos={this.state.todos} handleChange={this.handleChange} />
            </div>
        );
    }
}
export default TodoApp;

