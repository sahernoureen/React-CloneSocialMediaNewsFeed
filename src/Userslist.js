import React, { Component } from "react";

export default class Userslist extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      usersArray: this.props.usersArray
    };
  }

  handleChange = event => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let usersArray = this.props.usersArray;
    console.log("Selecting userlist " + usersArray);
    let options = usersArray.map(data => (
      <option key={data.id} value={data.addedBy}>
        {data.name}
      </option>
    ));
    console.log(options);
    return (
      <select
        name="Search"
        className="search-select"
        onChange={this.handleChange}
      >
        <option>Select user</option>
        {options}
      </select>
    );
  }
}
