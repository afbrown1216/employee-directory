import React, { Component } from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";





class Table extends Component {
    render() {
      return (
        <div className='container'>
          <div className='row'>
            <table className='col-sm'>
              <tbody>
                <TableHeader />
                {this.props.employees.map((employee) => (
                  <TableBody
                    id={employee.id}
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

