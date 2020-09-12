import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters:[],
            searchField:""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(allJson=>allJson.json())
            .then(mainData=>this.setState({monsters:mainData}))
    }

    changeHandler = (event) =>{
        this.setState({searchField:event.target.value})
    }
    render() {
        const {monsters,searchField} = this.state;
        const filteredMonsters = monsters.filter(single=>single.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <header>
                    <h1 className="headerMain">Monsters Filtered</h1>
                    <SearchBox placeholder="Enter Monster Name Here" handleChange={this.changeHandler}/>
                    <CardList allMonsters={filteredMonsters}/>
                </header>
            </div>
        );
    }


}

export default App;
