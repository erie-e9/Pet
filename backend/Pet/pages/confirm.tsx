import React, { PureComponent } from "react";
import { NextContext } from "next";

export class Confirm extends PureComponent {
  static getInitialProps({ query: { token } }: NextContext) {
    return { token };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}
