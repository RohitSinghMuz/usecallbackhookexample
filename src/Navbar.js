import React, { Component } from "react";
import withRouter from "./withRouter";

class Navbar extends Component {
  gotoHome = () => {
    this.props.navigate("/");
  };

  gotoService = () => {
    this.props.navigate("/service");
  };
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div>
            <button
              style={{ padding: "10px", margin: "15px" }}
              onClick={this.gotoHome}
            >
              Home
            </button>
          </div>
          <div>
            <button
              style={{ padding: "10px", margin: "15px" }}
              onClick={this.gotoService}
            >
              Service
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Navbar);
