import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { BoardGame } from "./BoardGame";

class GameWrapper extends Component {
  state = {
    length: 10,
    account: undefined,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        account: {
          id: "1",
          name: "Thangnd",
          address: {
            province: "Thai Binh",
          },
        },
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        {!this.state.account ? (
          <div>Loading...</div>
        ) : (
          <>
            Game snake prey
            {/* props */}
            <BoardGame length={this.state.length} />
            My hometown: {this.state.account.address.province}
            <Link to="/login">to login</Link>
            {/* 
              Version 5
              <Redirect to={'/login'} />              
            */}
          </>
        )}
      </div>
    );
  }
}

export default GameWrapper;
