import React, { Component } from "react";
import "./App.css";
import Student from "./Student";
import students from "./Students";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>All Students </h1>
        <ul>
          {students.map(studentName => (
            // console.log(studentName)
            <Student name={studentName} />
          ))}
        </ul>
      </div>
    );
  }
}
