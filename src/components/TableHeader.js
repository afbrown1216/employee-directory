import React from 'react';

const TableHeader = (props) => {
    console.log('props header', props)
    return (
            <>
                <tr>
                    <th>Image</th>
                    <th onClick={props.onClick}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>     
                </tr>
            
            
            </>
    
    );
};

export default TableHeader;