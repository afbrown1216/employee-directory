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
            <tr key={employee.id} style={rowStyle}>
            <td>
                <img alt = "Employee" src={employee.image} style={imgStyle}/>
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
                    <table className='col-sm table table-striped'>
                        <tbody>
                            <TableHeader onClick={props.onClick}/>
                        
                            {updateData}
                        </tbody>
                        
                    </table>
                </div>
            </div>
            
        </div>
    );
};

var imgStyle = {
    width: "100%"
};
var rowStyle = {
    backgroundColor: 'light grey', 
   
    padding: '8px'
}; 

export default Table;