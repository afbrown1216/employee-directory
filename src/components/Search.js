


import React from 'react';
import Form from "./Form"

const Search = (props) => {
    return (
        <div>
            <Form search={props.search} onChange={props.onChange}/>    
        </div>
    );
};

export default Search;

// class Search extends Component {
//   state = {
//     search: '',
//     results: [],
//     employees
//   };

//   componentDidMount() {
//     this.setState({ results: this.state.employees });
//   }

//   handleInputChange = (event) => {
//     this.setState(
//         { search: event.target.value },
//         () => {
//                 if(this.state.search === "") {
//                     this.setState({results: this.state.employees })
//                 } else { 
//                     const results = this.state.employees.filter( (employee) => {
//                         return employee.name.firstName.slice(0, this.state.search.length).toLowerCase() === this.state.search.toLowerCase()
//                     })
//                     this.setState({ results: results })
//                 }
//         }
//     )};


//   render() {
//     return (
//       <>
//       {/* 
//       {this.props.results.map((result ) => (
//       <Table 
//         id={result.id}
//         name={result.name}
//         image={result.image}
//         email= {result.email}
//         phone ={result.phone}
//         dob={result.dob}
//       /> 
//       ))} */}

//       </>
//     );
//   }
// }

// export default Search;



