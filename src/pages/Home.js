import React, { Component } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import employees from "../greys.json";




class home extends Component {
    state = {
        employees,
        search: ''
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
        console.log(employees.sort(sortEmployees)); 
        
    }
    
     sortEmployees = (a,b)=> {
        return a > b ? 1 : b > a ? -1 : 0;
     }
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


