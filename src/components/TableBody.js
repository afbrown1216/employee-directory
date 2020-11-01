import React from 'react';

const TableBody = (props) => {
    return (
        
       
                <tr>
                    <td>
                        <img alt = "Employee" src={props.image} />
                    </td>
                    <td> {props.name.firstName} {props.name.lastName} </td>
                    <td> {props.phone} </td>
                    <td> {props.email} </td>
                    <td> {props.dob} </td>
                </tr>
           

    );
};

export default TableBody;