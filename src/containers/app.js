import React,{Component} from 'react';
import CardList from '../components/cardlist';
import {robots} from '../components/robots';
import SearchBox from '../components/searchbox';
import "./app.css"
import Scroll from '../components/scroll'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: '' 
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
    return(
        <div>
            <div className='tc'>
                <h2 className="f1">Robots</h2>
                <SearchBox searchChange={this.onSearchChange} />
            </div>
            <Scroll>
               <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    )
}
}

export default App;