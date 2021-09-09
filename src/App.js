//import logo from './logo.svg';
import './App.css';
import {robots} from "./Robot";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''

        }
        this.onSearchChange = this.onSearchChange.bind(this)
    }
    onSearchChange(event) {
        // console.log(event.target.value)
        this.setState({searchfield : event.target.value})

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users})
        })

    }

    render() {
        const filteredRobots =this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
    <div className="App">
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
    </div>
  );}


}

export default App;
