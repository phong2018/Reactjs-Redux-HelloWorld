import React from "react";
import { connect } from "react-redux";  

const Xuat = ({ name }) => (
  <ul className="todo-list">
    HELLO {name}
  </ul>
);

const mapStateToProps = state => {  
  const name=state.nhap.name; 
  return { name } ;
}; 
export default connect(mapStateToProps)(Xuat);
