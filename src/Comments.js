import React, { Component } from "react";
import DisplayCommentbox from "./DisplayCommentbox";
import moment from "moment";
import "./AppStyles.css";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      postaddedBy: this.props.myuser,
      mycommentsArray: this.props.commentsArray
    };

    this.addcomment = this.addcomment.bind(this);
  }
  addcomment(e) {
    console.log("its my props commentsArray" + this.props.commentsArray);
    let newCommentId = this.state.mycommentsArray.length;
    console.log(this.props.commentsArray);
    if (this.textarea.value !== "") {
      let newComment = {
        id: ++newCommentId,
        msg: this.textarea.value,
        by: this.props.myuser,
        time: moment().calendar(),
        likes: 0
      };

      const newTimeLineComment = [...this.state.mycommentsArray, newComment];
      this.setState({ mycommentsArray: newTimeLineComment });

      e.preventDefault();
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div class="newComment">
          <img
            class="postBy"
            src={this.props.myuser}
            className="ui avatar image"
            alt=""
          />
          <form onSubmit={this.addcomment}>
            <div class="ui focus input">
              {" "}
              <textarea
                class="txtArea"
                rows="4"
                cols="30"
                ref={a => (this.textarea = a)}
                placeholder="Add new comment"
              ></textarea>{" "}
            </div>
            <div class="button">
              <button>comment</button>
            </div>
          </form>
        </div>
        <DisplayCommentbox
          commentsArray={this.state.mycommentsArray}
          myuser={this.props.myuser}
        />
      </div>
    );
  }
}
