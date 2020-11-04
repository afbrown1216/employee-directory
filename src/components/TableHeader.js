import React from 'react';

const TableHeader = (props) => {
    console.log('props header', props)
    return (
            <>
                <tr>
                    <th>Image</th>
                    <th onClick={props.onClick}>Name</th>
                    <th>Last Position</th>
                    <th>Last Workplace</th>
                    <th># of Seasons</th>     
                </tr>
            
            
            </>
    
    );
};

export default TableHeader;