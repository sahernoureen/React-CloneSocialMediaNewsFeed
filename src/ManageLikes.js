import React, { Component } from "react";

export default class ManageLikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      id: this.props.id
    };
    console.log(this.props.id);
    this.IncrementCount = this.IncrementCount.bind(this);
  }

  IncrementCount = () => {
    this.setState(
      { likes: this.state.likes + 1 },
      this.props.updateLikes(this.state.id)
    );
  };

  render() {
    return (
      <div>
        <p>
          {" "}
          <button onClick={this.IncrementCount}> like! </button> &nbsp;{" "}
          {this.state.likes}
        </p>
      </div>
    );
  }
}
