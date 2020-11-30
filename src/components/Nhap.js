import React from "react";
import { connect } from "react-redux";
import { nhap } from "../redux/actions";

class Nhap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  updateName = name=> {
    this.setState({ name });
  };

  handleNhap = () => {
    console.log("1.component/Nhap.handleNhap:",this.state.name);
    this.setState({ name: this.state.name });
    this.props.nhap(this.state.name);
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateName(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleNhap}>
          HELLO
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return { name: state.name};
};

export default connect(
    mapStateToProps,
  { nhap }
)(Nhap); 
