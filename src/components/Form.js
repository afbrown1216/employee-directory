import React from 'react';

const Form = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <form className='search' >
                        <div className='form-group'>
                            <input
                            value={props.search}
                            onChange={props.handleInputChange}
                            name='search'
                            type='text'
                            className='form-control'
                            placeholder='Search'
                            id='search'
                            />
                        </div>
                    </form>
                </div>
                <div className='col-sm-4'> </div>
            </div>
        </div>
    );
};

export default Form;