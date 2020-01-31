import React, { Component } from "react";
import SelectuserList from "./SelectuserList";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log("Array of users in navBar:" + props);
    this.state = {
      postsArray: props.PostsData,
      SelectUserArray: props.usersdata
    };
  }

  render() {
    return (
      <div class="navbar">
        <SelectuserList
          users={this.state.SelectUserArray}
          postsArray={this.props.PostsData}
        />
      </div>
    );
  }
}

//   <SelectSortlist users={this.state.SelectUserArray} />
