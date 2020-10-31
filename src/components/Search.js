import React from 'react';

const Search = () => {
    return (
        <div className = "container">

            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <form className="search">
                        <div className="form-group">
                            <label htmlFor="employeeName">Search Employee Name</label>
                            <input
                                name="employeeName"
                                list="bree"
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                id="name"
                            />
                            <button type="submit"  className="btn btn-secondary">
                                Search
                            </button>
                         </div>
                     </form>
                
                </div>
                <div class="col-sm-3"> </div>
            </div>
         </div>
    );
};

export default Search;