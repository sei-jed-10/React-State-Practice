import React, { Component } from "react";
import "./Student.css";
export default class Student extends Component {
  state = {
    ourCssClass: "",
    image:
      "https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png",
    message: ""
  };

  onClick = () => {
    this.setState({
      ourCssClass: "red",
      image: "http://getdrawings.com/free-icon-bw/hulk-icon-21.png",
      message: `I am the mighty ${this.props.name}, How dare you touch me!!?`
    });
  };

  onContextMenu = () => {
    // console.log("Right click!!");
    this.setState({
      ourCssClass: "blue",
      image:
        "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/350x350/products/117228/204948/Hulk-379-Decal-Sticker__73044.1511165171.jpg?c=2",
      message: "Stop. Poking. Around!!"
    });
  };

  onDoubleClick = () => {
    // console.log("Dobule Click!!");
    this.setState({
      ourCssClass: "green",
      image:
        "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/1280x1280/products/85440/182141/Hulk-Fist-Decal-Sticker__21739.1511149680.jpg?c=2?imbypass=on",
      message: "STOP IT!!!"
    });
    // setTimeout(() => {
    //   this.setState({
    //     ourCssClass: "",
    //     image : "https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png",
   // message: ""
    //   });
    // }, 1000);
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <li
            className={this.state.ourCssClass}
            onClick={this.onClick}
            onDoubleClick={this.onDoubleClick}
            onContextMenu={this.onContextMenu}
          >
            <img src={this.state.image} alt="hulky" />
            <br />
            {this.props.name}
            <br />
            {this.state.message}
          </li>
        </div>
      </div>
    );
  }
}
