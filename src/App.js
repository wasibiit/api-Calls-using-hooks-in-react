import React, {Component} from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import NavBar from "./Components/NavBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            searchParam: ""
        };
    }

    componentDidMount() {
        this.state = {
            username: "DevWasi",
            searchParam: "DevWasi"
        };
        this.getUser(this.username);
    }

    getUser(username) {
        console.log(this.state.username);

        fetch(`https://api.github.com/users/${this.state.username}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    username: data
                });
            });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState((state) => ({
                username: state.searchParam
            }),
            function () {
                this.getUser();
            });

    };

    handleChange = event => {
        this.setState({
            searchParam: event.target.value
        });
    };

    render() {
        return (
            <div>
                <NavBar/>
                <Form
                    username={this.state.username}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Cards username={this.state.username}/>
            </div>
        );
    }
}

export default App;
