import React, { Component } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import employees from "../greys.json";




class home extends Component {
    state = {
        employees,
        search: '',
        sortedEmployees: ''
    }

    onChange = (event)=> {

        let value = event.target.value;

        this.setState({
            search: value
        })

        // this.setState( { search: event.target.value },
        //             () => {
        //                     if(this.state.search === "") {
        //                         this.setState({results: this.state.employees })
        //                     } else { 
        //                         const results = this.state.employees.filter( (employee) => {
        //                             return employee.name.firstName.slice(0, this.state.search.length).toLowerCase() === this.state.search.toLowerCase()
        //                         })
        //                         this.setState({ results: results })
        //                     }
        //             }
    }

    onClick = ()=> {
        console.log('hit')
        var sortedEmployees = employees
        sortedEmployees.sort(
            (a,b)=> {
                return a.name.lastName > b.name.lastName ? 1 : b.name.lastName > a.name.lastName ? -1 : 0;
             }
        ); 
        this.setState({
            sortedEmployees: sortedEmployees
        })
        
    };


    render() {
        console.log('state', this.state)
        return (
            <div>
                  <Header />
                  <Search search={this.state.search} onChange={this.onChange} /> 
                <Table state={this.state} onClick={this.onClick} />
           
                
            </div>
        );
    }
}

export default home;


