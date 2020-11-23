import React, { Component } from "react"; 

class HelloWorld extends React.Component {
    render() {
    return <h2>Hi, I am a {this.props.tech}</h2>;
    }
}

export default HelloWorld;