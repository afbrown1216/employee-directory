import React, { Component } from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import employees from "../greys.json";




class Table extends Component {
    //set state for greys array for the table page 
    state = {
        employees

    };
    render() {
        return (
            <div className= "container">
                <div className = "row">
                    <table className = "col-sm">
                        <tbody>
                        <TableHeader />
                        {this.state.employees.map((employee) => (
                            <TableBody
                            id ={employee.id}
                            key={employee.id}
                            name={employee.name}
                            image={employee.image}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            
            </div>
        );
    }
}

export default Table;

