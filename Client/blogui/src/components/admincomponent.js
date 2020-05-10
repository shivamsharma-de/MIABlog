import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
// import UserService from "../services/user.service";
// import { Link, Route } from "react-router-dom";
import authHeader from '../services/auth-header'
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";

import axios from 'axios';
class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
       
        users: [],
        active: undefined
       
    };
  }
  componentDidMount() {
    // UserService.getAdminBoard().then(
    //   response => {
        this.loadPage();
    //   },
    //   error => {
    //     this.setState({
    //       content:
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    // );
  }
//   componentDidMount() {
//     UserService.getPublicContent().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }
  loadPage() {
    // get page of items from api
    
   
      fetch('http://localhost:5000/api/test/admin/users', { method: "GET", headers: authHeader() })
        .then((response) => response.json())
        .then(({ users }) => {
          this.setState(() => ({ users}));
          
        });

  }
  ondeactivate(id, ){
   
     axios.patch( `http://localhost:5000/api/auth/disable/${id}`,{
        
      });
    //   window.location.reload();

}
onactivate(id){
    axios.patch( `http://localhost:5000/api/auth/activate/${id}`,{
    });
    // window.location.reload();
    // window.location.reload();

}

  render() {
   
    const columns =[
        {
            Header: "User ID",
            accessor: "_id",
            filterable: true,
            style:{textAlign: "left"}
        },
        {
            Header: "Firstname",
            accessor: "firstname",
            filterable: true

        },
        {
            Header: "Lastname",
            accessor: "lastname",
            filterable: false
        },
        {
            Header: "Username",
            accessor: "username",
            filterable: true
        },
        {
            Header: "Email",
            accessor: "email",
            filterable: true
        },
        {
           
            Header: "Account Status",
            accessor: "active",
            // Cell: d => d.active.String(),
            Cell: ({ value }) => String(value),
            filterable: true
        },
        {
      
        Header: "Disable Account",
        filterable: false,
        Cell: props => (
            <button
            className="btn btn-danger mr-2"
            type="submit"
         onClick={()=>{
            this.ondeactivate(props.original._id, props.original.active);
         }}
         
          >
            Disable
          </button>
        )
        },
        {
            Header: "Activate Account",
            filterable: false,
            Cell: props => (
                <button
                className="btn btn-success mr-2"
                type="submit"
             onClick={()=>{
                this.onactivate(props.original._id);
             }}
              >
                Activate
              </button>
            )
            }
    ]
    return (
        <div>
        <div className="fixed-top">
        <Header/>
        </div>
        <ReactTable columns={columns} 
        data = {this.state.users} 
        filterable
        defaultPageSize={10}
      >

        </ReactTable>
<Footer/>
</div>
    );
  }
}
export default Admin;