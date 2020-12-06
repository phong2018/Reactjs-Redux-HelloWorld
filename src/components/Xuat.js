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
//map state của store đến đến props của component Xuat bằng function mapStateToProps
//-> lấy dữ liệu từ store bằng props: name
export default connect(mapStateToProps)(Xuat);
