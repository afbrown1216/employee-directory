import React, { Component } from 'react';
import employees from "../greys.json";

class Search extends Component {
    state = {
        search: "", 
        results: [],
        employees
    }; 

    componentDidMount() {
        this.setState({results: this.state.results});  
    }

    handleInputChange = event => {
        this.setState({search: event.target.value});
        
    };
    
    handleSubmit = event => {
        event.preventDefault(); 
        const results = this.state.employees.filter(employee => employee.name === "Grey");
        this.setState({ results })
        console.log(results)
    };

    render() {
        return (
            <div className = "container">

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form className="search" onSubmit={this.handleSubmit}>
                        <div className="form-group" >
                            <input
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="search"
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                id="search"
                            />
                         </div>
                     </form>
                
                </div>
                <div className="col-sm-4"> </div>
            </div>
         </div>
        );
    }
}

export default Search;