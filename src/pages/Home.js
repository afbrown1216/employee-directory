import React, { Component } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import employees from "../greys.json";



class Home extends Component {
    constructor() {
      super();
      this.state = { employees: employees };
    }
  
    updateEmployees = (result) => {
      this.setState({ employees: result });
    };
  
    render() {
      return (
        <div>
          <Header />
          <Search updateEmployees={this.updateEmployees} />
          <Table employees={this.state.employees} />
        </div>
      );
    }
  }

export default Home;