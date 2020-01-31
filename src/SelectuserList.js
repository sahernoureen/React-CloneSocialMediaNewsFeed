import React, { Component } from "react";
import Userslist from "./Userslist";
import Addpost from "./Addpost";

export default class SelectuserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: " "
    };
  }

  handleSelectChange = selectedValue => {
    this.setState({
      selectedValue: selectedValue
    });
  };

  render() {
    return (
      <div>
        <Userslist
          usersArray={this.props.users}
          onSelectChange={this.handleSelectChange}
        />{" "}
        <Addpost
          myuser={this.state.selectedValue}
          Users={this.props.users}
          posts={this.props.postsArray}
        />
      </div>
    );
  }
}

//
