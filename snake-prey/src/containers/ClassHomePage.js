import React, { Component } from "react";

class ClassHomePage extends Component {
  // khởi tạo các biến và hàm của component, hàm này auto được gọi, nếu cần thêm logic trong hàm này, thì mới phải viết lại
  // constructor(){
  //     super();
  //     console.log('constructor called')
  // }

  state = {
    arrayNames: [{ name: "John" }],
    username: "admin",
  };

  componentDidMount() {
    console.log("component did mount");
    console.log(this);
  }

  // life cycle

  onClick = () => {
    console.log("clicked");
    this.setState({
      arrayNames: [{ name: "Lisa" }],
    });
  };

  renderNames = () => {
    return this.state.arrayNames.map((objName) => <span>{objName.name}</span>);
  };

  render() {
    return (
      <>
        <div>
          Homepage <button onClick={() => this.onClick()}>CLick me</button>
        </div>{" "}
        {this.renderNames()}
      </>
    );
  }
}

export default ClassHomePage;
