import React, { Component } from "react";
import moment from "moment";
import DisplayReply from "./DisplayReply";

export default class ReplyComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      comment: "",
      postaddedBy: this.props.myuser,
      myreplyArray: this.props.replyArray
    };

    this.addReply = this.addReply.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  getInitialState() {
    return { showResults: false };
  }
  onClick() {
    this.setState({ showResults: true });
  }

  addReply(e) {
    console.log("its my props Replyarray" + this.props.replyArray);
    let newreplyId = this.props.replyArray.length;
    console.log(this.props.replyArray);
    if (this.input.value !== "") {
      let newreply = {
        id: ++newreplyId,
        re: this.input.value
      };
      const newTimeLineReply = [...this.state.myreplyArray, newreply];
      this.setState({ myreplyArray: newTimeLineReply });
      e.preventDefault();
    }
    e.preventDefault();
  }

  render() {
    return (
      <div class="newReply">
        <form onSubmit={this.addReply}>
          <div class="ui focus input">
            <button class="replyButton" onClick={this.onClick}>
              Reply
            </button>
            <input
              class="replyArea"
              rows="4"
              cols="15"
              ref={a => (this.input = a)}
              placeholder="reply"
            ></input>{" "}
            {this.state.showResults ? (
              <DisplayReply
                replyArray={this.state.myreplyArray}
                myuser={this.props.myuser}
              />
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}
