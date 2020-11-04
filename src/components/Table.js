import React from 'react';
import TableHeader from "./TableHeader";


const Table = (props) => {
    console.log('props',props);

    let updateData = props.state.employees.filter((employee) => {
        if(props.state.search){
            return employee.name.firstName.indexOf(props.state.search) > -1
        }
        return true
    }).map((employee) => {
        return (
            <tr key={employee.id}>
            <td>
                <img alt = "Employee" src={employee.image} />
            </td>
            <td> {employee.name.firstName} {employee.name.lastName} </td>
            <td> {employee.phone} </td>
            <td> {employee.email} </td>
            <td> {employee.dob} </td>
            </tr>   
        )
    })

    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <table className='col-sm'>
                        <TableHeader onClick={props.onClick}/>
                        <tbody>
                            {updateData}
                        {/* {props.state.employees.map((employee)=>{
                           return (
                            <tr>
                            <td>
                                <img alt = "Employee" src={employee.image} />
                            </td>
                            <td> {employee.name.firstName} {employee.name.lastName} </td>
                            <td> {employee.phone} </td>
                            <td> {employee.email} </td>
                            <td> {employee.dob} </td>
                            </tr>   
                           )
                        })} */}
                        </tbody>
                        
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default Table;