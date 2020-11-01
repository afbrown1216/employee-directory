import React from 'react';
import TableHeader from "./TableHeader";


const Table = (props) => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <table className='col-sm'>
                        <tbody>
                            <TableHeader />
                            <tr>
                                <td>
                                    <img alt = "Employee" src={props.image} />
                                </td>
                                <td> {props.name.firstName} {props.name.lastName} </td>
                                <td> {props.phone} </td>
                                <td> {props.email} </td>
                                <td> {props.dob} </td>
                            </tr>      
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default Table;