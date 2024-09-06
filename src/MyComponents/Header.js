import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Header(props) {   //props are js objects passing from parent to child component {}-this also represents "props"
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul> 
        {props.searchBar?<form className="d-flex" role="search">                               
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>:""}   {/*ternary operator to check the condition if the boolean value is true or false*/}
      </div>
    </div>
  </nav>
  );
}
 
Header.defaultProps={        //this shows when there is no title give in the parent component
  title:"Nothing",
  searchBar:true
}

Header.propTypes={
  title: PropTypes.string,   //Datatypes of the variables used in parent component
  searchBar: PropTypes.bool.isRequired           //this is required,wil show error if not entered
} 


//useState hooks are used when you want to make changes from backend to the frontend ,you cannot directly makes changes in the webpage by making changes in the variables