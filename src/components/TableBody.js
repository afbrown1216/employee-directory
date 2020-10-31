import React from 'react';

const TableBody = (props) => {
    return (
        
            <tbody>
                <tr>
                    <td>
                        <img alt = "Meridith" src={props.image} />
                    </td>
                    <td> {props.name} </td>
                    <td> {props.phone} </td>
                    <td> {props.email} </td>
                    <td> {props.dob} </td>
                </tr>
            </tbody>

    );
};

export default TableBody;